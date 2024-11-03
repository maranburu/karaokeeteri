<script setup>
    import {probability} from '@/ocs/shared/utils';
    const props = defineProps(['oc', 'iscurrent', 'index', 'fancy']);

    const getFontClass = (oc, i) => {
        if (oc.length === 0 || i === 0) return '';
        const modulo = oc.length % i;
        if (modulo === 2) return 'weird-character-1';
        if (modulo === 3) return 'weird-character-2';
        if (modulo === 5) return 'weird-character-3';
        return '';
    }
    const getSizeClass = (oc, i) => {
        if (oc.length === 0 || i === 0) return '';
        const modulo = oc.length % i;
        if (modulo === 7) return 'bigger';
        return '';
    }
    const getCharacterClass = (oc, i) => {
        if (!props.fancy) return '';
        return `${getFontClass(oc, i)} ${getSizeClass(oc,i )}`;
    }

    const getOcClass = (iscurrent, index) => {
        return `oc ${iscurrent ? 'current' : ''} ${index < 4 ? 'old' : ''} ${index < 2 ? 'veryold' : ''} ${props.fancy ? 'fancy' : ''}`;
    }
</script>

<template>
    <div :class="getOcClass(props.iscurrent, props.index)">
        <span
            v-for="(item, i) in props.oc.split('')"
            :key="item + i"
            :class="getCharacterClass(props.oc, i)">
            {{ item }}
        </span>
    </div>
</template>

<style scoped>
    .oc {
        padding: 10px;
        font-size: 30px;
        color: white;
        letter-spacing: 3px;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
        font-style: italic;
        opacity: 0.4;
        transition: opacity 2s ease;
        min-height: 55px;
        transition: all 2s ease-in-out;
    }
    .oc.current {
        opacity: 1;
    }
    .oc.old {
        opacity: 0.2;
    }
    .oc.old.fancy {
        letter-spacing: 6px;
    }
    .oc.veryold {
        opacity: 0.1;
    }
    .oc.veryold.fancy {
        letter-spacing: 10px;
    }
    .weird-character-1 {
        font-family: "Cute Font", sans-serif;
        font-size: 40px;
    }
    .weird-character-2 {
        font-family: "Dancing Script", sans-serif;
        font-size: 35px;
    }
    .weird-character-3 {
        font-family: "Gamja Flower", sans-serif;
        font-size: 40px;
    }
    .bigger {
        font-size: 40px;
    }
</style>