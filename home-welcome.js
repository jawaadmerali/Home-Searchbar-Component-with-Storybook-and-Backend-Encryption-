import { mapGetters , mapMutations } from 'vuex';
import mvtSearchbox from '@/common/components/mvtsearchbox/mvt-searchbox.vue';
import mvtInputGeo from '@/common/components/mvtinputgeo/mvt-inputgeo.vue';
import HomeWelcomePresentational from './home-welcome.presentational.vue';

export default {
    name: 'homeWelcome',
    inject: ['$eventBus'],
    components: {
        mvtSearchbox,
        mvtInputGeo,
        HomeWelcomePresentational,
    },
    computed: {
        ...mapGetters('glb', ['viewport', 'glb']),
        ...mapGetters('home', ['home']),
        homeMain(){
           return this.home.homeImgWebp;
        }
    },
    methods: {
        ...mapMutations('glb', ['updatePopLead']),
        openAssignedAgentHotlead(url) {
            let hotleadType = this.glb.isMobile ? 'PopupHotleadInPricingTool_sellerMOBILE' : 'PopupHotleadInPricingTool_seller';
            this.$eventBus.$emit('dialog-center', {
                name: 'mvtHotleadForm',
                trigger: this.$options.name,
                opt: {
                    hotleadType,
                    buttonText: 'Connect Now',
                    hotleadTitle: 'Connect with an agent',
                    showComment: false,
                    hideVeteran: true,
                    redirectUrl: url,
                    noSellLead: true,
                }
            });
        },
    },
    beforeMount() {
        let that = this;
        this.$eventBus.$on('eventbus-popLead-beforeRedirect', function(data){
            that.updatePopLead(false)
            that.openAssignedAgentHotlead(data)
        });
    },
    mounted(){
        if (this.glb.isPhone) {
            $(this.$el)
                .find('input')
                .on('focus', function () {
                    let scrollTop = $(window).scrollTop();
                    document.getElementById('searchTab').scrollIntoView();
                    $(this).one('blur', function () {
                        setTimeout(() => {
                            window.scrollTo(0, scrollTop);
                        }, 100);
                    });
                });
        }
    },
    beforeUnmount() {
        this.$eventBus.$off('eventbus-popLead-beforeRedirect');
    },
};
