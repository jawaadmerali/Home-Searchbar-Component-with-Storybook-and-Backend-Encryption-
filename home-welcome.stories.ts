import type { Meta, StoryObj } from '@storybook/vue3';
import HomeWelcomePresentational from '../vweb/home/components/homewelcome/home-welcome.presentational.vue';

const meta: Meta = {
    title: 'General/Home Welcome Card',
    component: HomeWelcomePresentational,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        home: {
            homeImgWebp: '',
            homeImgWebpSM: '',
            homeImgWebpMD: '',
            homeImgWebpLG: '',
            homeImgWebpXL: '',
            homeImgSrcset: '',
        },
        isPhone: false,
        labels: {
            welcomeHome: '',
            homeBuyTip: '',
            button: {
                homeBuy: '',
                homeSell: '',
                homeEst: '',
            },
            aria: {
                homeBuy: '',
                homeSell: '',
                homeEst: '',
            },
            homeBuyText: '',
            homeSellText: '',
            homePriceText: '',
            buyAHome: '',
            sellHome: '',
            homeEstimate: '',
        },
    },
};


export default meta;
type Story = StoryObj<typeof HomeWelcomePresentational>;

export const Default: Story = {
    args: {
        home: {
            homeImgWebp:    'https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-xs.webp',
            homeImgWebpSM:    'https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-sm.webp',
            homeImgWebpMD:    'https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-md.webp',
            homeImgWebpLG:    'https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-lg.webp',
            homeImgWebpXL:    'https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-xl.webp',
            homeImgSrcset:
                'https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-xs.webp 639w, https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-sm.webp 991w, https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-md.webp 1399w, https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-lg.webp 1920w, https://pi2.movoto.com/1.9.203/novaimgs/images/desktop/home/home-xl.webp 1921w',
        },
        isPhone: false,
        labels: {
            welcomeHome: 'Buy, sell, and own with confidence',
            homeBuyTip: 'Movoto provides quick access to listings, market insights, and real estate experts.',
            button: {
                homeBuy: 'Buy A Home',
                homeSell: 'Sell My Home',
                homeEst: 'Home Estimate',
            },
            aria: {
                homeBuy: 'Buy A Home',
                homeSell: 'Sell My Home',
                homeEst: 'Home Estimate',
            },
            homeBuyText: 'City, ZIP, School, Address, Neighborhood...',
            homeSellText: 'My Home Address',
            homePriceText: 'Enter home address...',
            buyAHome: '',
            sellHome: '',
            homeEstimate: '',
        },
    },
};
