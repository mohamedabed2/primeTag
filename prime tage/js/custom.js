$(document).ready(function(){
    // $(".owl-carousel").owlCarousel();
    "use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });


            //     const newsTicker = {
            //         init() {
            //             this.cacheDOM();
            //             this.bindEvents();
            //             this.news();
            //             this.ticker();
            //         },
            //         cacheDOM() {
            //             let $el = $(".app");
            //             this.$newsBox = $el.find(".news-box");
            //             this.$news = $el.find(".news");
            //             this.$ticker = (".ticker li p");
            //         },
            //         bindEvents() {
            //             $(window).resize(f => {
            //                 this.news();
            //                 this.ticker();
            //             });
            //         },
            //         news() {
            //             this.tickerWidth = $(this.$ticker).width();
            //             this.style = {
            //                 position: "absolute",
            //                 bottom: "-20px",
            //                 right: -(this.tickerWidth),
            //                 left: this.tickerWidth,
            //                 fontSize: "30px",
            //                 whiteSpace: "nowrap"
            //             };
            //             this.blockArr = $(this.$ticker).get().map(e => $(e).text());
            //             this.itemNum = -1;
            //         },
            //         ticker() {
            //             this.itemNum = this.itemNum < this.blockArr.length - 1 ? this.itemNum + 1 : 0;
            //             $(this.$news).css(this.style);
            //             $(this.$news).text(this.blockArr[this.itemNum]);
            //             this.render();
            //         },
            //         render() {
            //             // console.log(($(this.$news).width()),this.$news.width(),$(this.ticker).width()) 
            //             $(this.$news).animate({
            //                 left: `-${$(this.ticker).width() *2}`
            //             }, 15000, "linear", this.ticker.bind(this));
            //         }
            //     }
            // newsTicker.init();
});
