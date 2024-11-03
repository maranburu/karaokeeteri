<script setup>
    import {probability} from '@/ocs/shared/utils';
    const props = defineProps(['oc', 'iscurrent', 'index', 'fancy']);

    const getFontClass = () => {
        if (probability(0.1)) return 'weird-character-1';
        if (probability(0.1)) return 'weird-character-2';
        if (probability(0.1)) return 'weird-character-3';
        return '';
    }
    const getSizeClass = () => {
        if (probability(0.1)) return 'bigger';
        return '';
    }
    const getCharacterClass = () => {
        if (!props.fancy) return '';
        return `${getFontClass()} ${getSizeClass()}`;
    }

    const getOcClass = (iscurrent, index) => {
        return `oc ${iscurrent ? 'current' : ''} ${index < 4 ? 'old' : ''} ${index < 2 ? 'veryold' : ''}`;
    }
</script>

<template>
    <div :class="getOcClass(props.iscurrent, props.index)">
        <span
            v-for="(item, i) in props.oc.split('')"
            :key="item + i"
            :class="getCharacterClass()">
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
        letter-spacing: 6px;
    }
    .oc.veryold {
        opacity: 0.1;
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