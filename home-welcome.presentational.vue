<template>
    <section class="home-welcome-presentational section-hero">
        <picture class="bg" >
            <source :srcset="home.homeImgWebp" media="(max-width: 639px)" type="image/webp">
            <source :srcset="home.homeImgWebpSM" media="(min-width: 640px) and (max-width: 991px)" type="image/webp">
            <source :srcset="home.homeImgWebpMD" media="(min-width: 992px) and (max-width: 1399px)" type="image/webp">
            <source :srcset="home.homeImgWebpLG" media="(min-width: 1400px) and (max-width: 1920px)" type="image/webp">
            <source :srcset="home.homeImgWebpXL" media="(min-width: 1921px)" type="image/webp">
            <img :src="home.homeImgWebp" alt="Welcome Home Movoto" :srcset="home.homeImgSrcset">
        </picture>
        <div >
            <div class="info">
                <h1 class="f1 text-bold" :class="{'text-center' : isPhone}">
                    {{ labels.welcomeHome }}
                </h1>
                <div class="f6" :class="{'text-center' : isPhone}">
                    {{ labels.homeBuyTip }}
                </div>
                <ul id="searchTab" class="tab tab-bookmark" data-role="tab">
                    <li class="m-r-1">
                        <button type="button" :aria-label="labels.aria.homeBuy" :class="{'active': index==0}" @click="toggle(0)">{{ labels.button.homeBuy }}</button>
                    </li>
                    <li class="m-r-1">
                        <button type="button" :aria-label="labels.aria.homeSell" :class="{'active': index==1}" @click="toggle(1)">{{ labels.button.homeSell }}</button>
                    </li>
                    <li>
                        <button type="button" :aria-label="labels.aria.homeEst" :class="{'active': index==2}" @click="toggle(2)"> {{ labels.button.homeEst }}</button>
                    </li>
                </ul>
                <div v-show="index==0" comp="homeBuy" class="content">
                    <mvtSearchbox class="large" :placeholder="labels.homeBuyText" v-model="searchInfo"/>
                </div>
                <div v-show="index==1" comp="homeSell" class="content">
                    <mvtInputGeo ref="sellAddressInput" class="large" :btnclass="'bg btn active'" v-model="sellGeoInfo" :placeholder="labels.homeSellText"/>
                </div>
                <div v-show="index==2" comp="homePriceEst" class="content">
                    <mvtInputGeo ref="addressInput" class="large" :btnclass="'bg btn active'" v-model="geoInfo" :placeholder="labels.homePriceText"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import mvtSearchbox from '@/common/components/mvtsearchbox/mvt-searchbox.vue';
import mvtInputGeo from '@/common/components/mvtinputgeo/mvt-inputgeo.vue';
export default {
    name: 'HomeWelcomePresentational',
    inject: ['$eventBus'],
    props: {
        home: Object,
        isPhone: Boolean,
        labels: Object,
        updatePopLead: Function,
    },
    components: {
        mvtSearchbox,
        mvtInputGeo
    },
    methods: {
        toggle(index) {
            this.index = index;
        }
    },
    data() {
        return {
            index: 0,
            searchInfo: {
                text: '',
                geo: null
            },
            sellGeoInfo: {
                text: '',
                geo: null
            },
            geoInfo: {
                text: '',
                geo: null
            },
        };
    },
    watch: {
        geoInfo(newVal){
            if (newVal){
                this.$eventBus.$emit('eventbus-search-address', {
                    text: newVal.text,
                    geo: newVal.geo,
                    extraPath: '?simple=price'
                });
            }
        },
        searchInfo(newVal){
            if (newVal){
                this.$eventBus.$emit('eventbus-search', {
                    text: newVal.text,
                    geo: newVal.geo,
                    isGoogleGeo: newVal.isGoogleGeo,
                    extraPath: this.index == 1 ? 'sold/' : (newVal.extraPath && `${newVal.extraPath}/`),
                    isMlsNumber: newVal.isMlsNumber
                });
            }
         },
         sellGeoInfo(newVal){
            if (newVal){
                this.updatePopLead(true)
                this.$eventBus.$emit('eventbus-search-address', {
                    text: newVal.text,
                    geo: newVal.geo,
                    extraPath: '?simple=price',
                });
            }
        },
    },
    mounted() {
        if (location.href.indexOf('select=pricemyhome') >= 0){
            this.toggle(2);
        }
    }
};
</script>
