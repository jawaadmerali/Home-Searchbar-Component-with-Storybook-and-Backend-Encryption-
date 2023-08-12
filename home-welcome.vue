<template>
    <HomeWelcomePresentational
        :home="home"
        :isPhone="glb.isPhone"
        :updatePopLead="updatePopLead"
        :labels="{
            button: {
                homeBuy: glb.isPhone ? molang('home.buy') : molang('home.buyAHome'),
                homeSell: glb.isPhone ? molang('home.sell') : molang('home.sellHome'),
                homeEst: glb.isPhone ? molang('home.homeEst') : molang('home.homeEstimate'),
            },
            aria: {
                homeBuy: molang('home.buy'),
                homeSell: molang('home.sell'),
                homeEst: molang('home.homeEst'),
            },
            welcomeHome: molang('home.WelcomeHomeNew'),
            homeBuyTip: molang('home.BuyTip'),
            homeBuyText: molang('home.BuyText'),
            homeSellText: molang('home.sellMyHomeText'),
            homePriceText: molang('home.PriceMyHomeText'),
            buyAHome: molang('home.buyAHome'),
            sellHome: molang('home.sellHome'),
            homeEstimate: molang('home.homeEstimate'),
        }"
    />
</template>

<script src="./home-welcome.js"></script>
