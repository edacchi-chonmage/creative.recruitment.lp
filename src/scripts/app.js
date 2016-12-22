import initScrollController from './scroll-animations.js';

const BAR_MAX_HEIGHT = 336;
const KV_LENGTH = 7;

class MainController {
  constructor (
    $interval,
    $timeout
  ) {
    this.$images = $('img');
    this.$htmlbody = $('html, body');
    this.$logo = $('#jsi-logo');
    this.$logoImages;
    this.$logoBar = $('#jsi-logobar');
    this.interval = $interval;
    this.timeout = $timeout;
    this.imageUrls = {
      mvBackground: [
        '/img/recruit/designer/visual.main.1.jpg',
        '/img/recruit/designer/visual.main.2.jpg',
        '/img/recruit/designer/visual.main.3.jpg',
        '/img/recruit/designer/visual.main.4.jpg',
        '/img/recruit/designer/visual.main.5.jpg',
        '/img/recruit/designer/visual.main.6.jpg',
        '/img/recruit/designer/visual.main.7.jpg'
      ],
      mainLogoGrid: [
        '/img/recruit/designer/logo.001.png',
        '/img/recruit/designer/logo.002.png',
        '/img/recruit/designer/logo.003.png',
        '/img/recruit/designer/logo.004.png',
        '/img/recruit/designer/logo.005.png',
        '/img/recruit/designer/logo.006.png',
        '/img/recruit/designer/logo.007.png',
        '/img/recruit/designer/logo.008.png',
        '/img/recruit/designer/logo.009.png',
        '/img/recruit/designer/logo.010.png',
        '/img/recruit/designer/logo.011.png',
        '/img/recruit/designer/logo.012.png',
        '/img/recruit/designer/logo.013.png',
        '/img/recruit/designer/logo.014.png',
        '/img/recruit/designer/logo.015.png',
        '/img/recruit/designer/logo.016.png',
        '/img/recruit/designer/logo.017.png',
        '/img/recruit/designer/logo.018.png',
        '/img/recruit/designer/logo.019.png',
        '/img/recruit/designer/logo.020.png',
        '/img/recruit/designer/logo.021.png',
        '/img/recruit/designer/logo.022.png',
        '/img/recruit/designer/logo.023.png',
        '/img/recruit/designer/logo.024.png',
        '/img/recruit/designer/logo.025.png',
        '/img/recruit/designer/logo.026.png',
        '/img/recruit/designer/logo.027.png',
        '/img/recruit/designer/logo.028.png',
        '/img/recruit/designer/logo.029.png',
        '/img/recruit/designer/logo.030.png',
        '/img/recruit/designer/logo.031.png',
        '/img/recruit/designer/logo.032.png',
        '/img/recruit/designer/logo.033.png',
        '/img/recruit/designer/logo.034.png',
        '/img/recruit/designer/logo.035.png',
        '/img/recruit/designer/logo.036.png',
        '/img/recruit/designer/logo.037.png',
        '/img/recruit/designer/logo.038.png',
        '/img/recruit/designer/logo.039.png',
        '/img/recruit/designer/logo.040.png',
        '/img/recruit/designer/logo.041.png',
        '/img/recruit/designer/logo.042.png',
        '/img/recruit/designer/logo.043.png',
        '/img/recruit/designer/logo.044.png',
        '/img/recruit/designer/logo.045.png',
        '/img/recruit/designer/logo.046.png',
        '/img/recruit/designer/logo.047.png',
        '/img/recruit/designer/logo.048.png',
        '/img/recruit/designer/logo.049.png',
        '/img/recruit/designer/logo.050.png',
        '/img/recruit/designer/logo.051.png',
        '/img/recruit/designer/logo.052.png',
        '/img/recruit/designer/logo.053.png',
        '/img/recruit/designer/logo.054.png',
        '/img/recruit/designer/logo.055.png',
        '/img/recruit/designer/logo.056.png',
        '/img/recruit/designer/logo.057.png',
        '/img/recruit/designer/logo.058.png',
        '/img/recruit/designer/logo.059.png',
        '/img/recruit/designer/logo.060.png',
        '/img/recruit/designer/logo.061.png',
        '/img/recruit/designer/logo.062.png',
        '/img/recruit/designer/logo.063.png',
        '/img/recruit/designer/logo.064.png',
        '/img/recruit/designer/logo.065.png',
        '/img/recruit/designer/logo.066.png',
        '/img/recruit/designer/logo.067.png',
        '/img/recruit/designer/logo.068.png',
        '/img/recruit/designer/logo.069.png',
        '/img/recruit/designer/logo.070.png',
        '/img/recruit/designer/logo.071.png',
        '/img/recruit/designer/logo.072.png',
        '/img/recruit/designer/logo.073.png',
        '/img/recruit/designer/logo.074.png',
        '/img/recruit/designer/logo.075.png',
        '/img/recruit/designer/logo.076.png',
        '/img/recruit/designer/logo.077.png',
        '/img/recruit/designer/logo.078.png',
        '/img/recruit/designer/logo.079.png',
        '/img/recruit/designer/logo.080.png',
        '/img/recruit/designer/logo.081.png',
        '/img/recruit/designer/logo.082.png',
        '/img/recruit/designer/logo.083.png',
        '/img/recruit/designer/logo.084.png',
        '/img/recruit/designer/logo.085.png',
        '/img/recruit/designer/logo.086.png',
        '/img/recruit/designer/logo.087.png',
        '/img/recruit/designer/logo.088.png',
        '/img/recruit/designer/logo.089.png',
        '/img/recruit/designer/logo.090.png',
        '/img/recruit/designer/logo.091.png',
        '/img/recruit/designer/logo.092.png',
        '/img/recruit/designer/logo.093.png',
        '/img/recruit/designer/logo.094.png',
        '/img/recruit/designer/logo.095.png',
        '/img/recruit/designer/logo.096.png',
        '/img/recruit/designer/logo.097.png',
        '/img/recruit/designer/logo.098.png',
        '/img/recruit/designer/logo.099.png',
        '/img/recruit/designer/logo.100.png',
        '/img/recruit/designer/logo.101.png',
        '/img/recruit/designer/logo.102.png',
        '/img/recruit/designer/logo.103.png',
        '/img/recruit/designer/logo.104.png',
        '/img/recruit/designer/logo.105.png',
        '/img/recruit/designer/logo.106.png',
        '/img/recruit/designer/logo.107.png',
        '/img/recruit/designer/logo.108.png',
        '/img/recruit/designer/logo.109.png',
        '/img/recruit/designer/logo.110.png',
        '/img/recruit/designer/logo.111.png',
        '/img/recruit/designer/logo.112.png',
        '/img/recruit/designer/logo.113.png',
        '/img/recruit/designer/logo.114.png',
        '/img/recruit/designer/logo.115.png',
        '/img/recruit/designer/logo.116.png',
        '/img/recruit/designer/logo.117.png',
        '/img/recruit/designer/logo.118.png',
        '/img/recruit/designer/logo.119.png',
        '/img/recruit/designer/logo.120.png',
        '/img/recruit/designer/logo.121.png',
        '/img/recruit/designer/logo.122.png',
        '/img/recruit/designer/logo.123.png',
        '/img/recruit/designer/logo.124.png',
        '/img/recruit/designer/logo.125.png',
        '/img/recruit/designer/logo.126.png',
        '/img/recruit/designer/logo.127.png',
        '/img/recruit/designer/logo.128.png',
        '/img/recruit/designer/logo.129.png',
        '/img/recruit/designer/logo.130.png',
        '/img/recruit/designer/logo.131.png',
        '/img/recruit/designer/logo.132.png',
        '/img/recruit/designer/logo.133.png',
        '/img/recruit/designer/logo.134.png',
        '/img/recruit/designer/logo.135.png',
        '/img/recruit/designer/logo.136.png',
        '/img/recruit/designer/logo.137.png',
        '/img/recruit/designer/logo.138.png',
        '/img/recruit/designer/logo.139.png',
        '/img/recruit/designer/logo.140.png',
        '/img/recruit/designer/logo.141.png',
        '/img/recruit/designer/logo.142.png',
        '/img/recruit/designer/logo.143.png',
        '/img/recruit/designer/logo.144.png',
        '/img/recruit/designer/logo.145.png',
        '/img/recruit/designer/logo.146.png',
        '/img/recruit/designer/logo.147.png',
        '/img/recruit/designer/logo.148.png',
        '/img/recruit/designer/logo.149.png',
        '/img/recruit/designer/logo.150.png',
        '/img/recruit/designer/logo.151.png',
        '/img/recruit/designer/logo.152.png',
        '/img/recruit/designer/logo.153.png',
        '/img/recruit/designer/logo.154.png',
        '/img/recruit/designer/logo.155.png',
        '/img/recruit/designer/logo.156.png',
        '/img/recruit/designer/logo.157.png',
        '/img/recruit/designer/logo.158.png',
        '/img/recruit/designer/logo.159.png',
        '/img/recruit/designer/logo.160.png',
        '/img/recruit/designer/logo.161.png',
        '/img/recruit/designer/logo.162.png',
        '/img/recruit/designer/logo.163.png',
        '/img/recruit/designer/logo.164.png',
        '/img/recruit/designer/logo.165.png',
        '/img/recruit/designer/logo.166.png',
        '/img/recruit/designer/logo.167.png',
        '/img/recruit/designer/logo.168.png',
        '/img/recruit/designer/logo.169.png',
        '/img/recruit/designer/logo.170.png',
        '/img/recruit/designer/logo.171.png',
        '/img/recruit/designer/logo.172.png',
        '/img/recruit/designer/logo.173.png',
        '/img/recruit/designer/logo.174.png',
        '/img/recruit/designer/logo.175.png',
        '/img/recruit/designer/logo.176.png',
        '/img/recruit/designer/logo.177.png',
        '/img/recruit/designer/logo.178.png',
        '/img/recruit/designer/logo.179.png',
        '/img/recruit/designer/logo.180.png',
        '/img/recruit/designer/logo.181.png',
        '/img/recruit/designer/logo.182.png',
        '/img/recruit/designer/logo.183.png',
        '/img/recruit/designer/logo.184.png',
        '/img/recruit/designer/logo.185.png',
        '/img/recruit/designer/logo.186.png',
        '/img/recruit/designer/logo.187.png',
        '/img/recruit/designer/logo.188.png',
        '/img/recruit/designer/logo.189.png',
        '/img/recruit/designer/logo.190.png',
        '/img/recruit/designer/logo.191.png',
        '/img/recruit/designer/logo.192.png',
        '/img/recruit/designer/logo.193.png',
        '/img/recruit/designer/logo.194.png',
        '/img/recruit/designer/logo.195.png',
        '/img/recruit/designer/logo.196.png'
      ],
      logoTypes: [
        '/img/recruit/designer/logo.type.1.png',
        '/img/recruit/designer/logo.type.2.png',
        '/img/recruit/designer/logo.type.3.png'
      ],
      others: [
        '/img/recruit/designer/arrow.next.svg',
        '/img/recruit/designer/icon.review.png',
        '/img/recruit/designer/icon.grouplearning.png',
        '/img/recruit/designer/icon.dted.png',
        '/img/recruit/designer/icon.insighthack.png',
        '/img/recruit/designer/icon.creatorstime.png',
        '/img/recruit/designer/icon.quietroom.png',
        '/img/recruit/designer/members.mii.jpg',
        '/img/recruit/designer/members.nao.jpg',
        '/img/recruit/designer/members.chuck.jpg',
        '/img/recruit/designer/members.zackymarie.jpg',
        '/img/recruit/designer/members.edacchi.jpg',
        '/img/recruit/designer/members.totti.jpg',
        '/img/recruit/designer/members.ume.jpg',
        '/img/recruit/designer/members.vaseline.jpg',
        '/img/recruit/designer/members.galileo.jpg',
        '/img/recruit/designer/members.jack.jpg',
        '/img/recruit/designer/members.wakap.jpg',
        '/img/recruit/designer/members.katie.jpg',
        '/img/recruit/designer/logo.bizreach.svg',
        '/img/recruit/designer/logo.bizreachwoman.svg',
        '/img/recruit/designer/logo.careertrek.svg',
        '/img/recruit/designer/logo.stanby.svg',
        '/img/recruit/designer/logo.regionup.svg',
        '/img/recruit/designer/logo.hrmos.svg',
        '/img/recruit/designer/logo.campus.svg',
        '/img/recruit/designer/logo.bizhint.svg',
        '/img/recruit/designer/logo.29reach.svg',
        '/img/recruit/designer/footer.facebook.svg',
        '/img/recruit/designer/footer.twitter.svg',
        '/img/recruit/designer/footer.linkedin.svg'
      ]
    };
    this.images = {};
    this.kvIndex = 1;
    this.positionTabIndex = 0;
    this.isVisibleAppliedToast = false;

    this.resizeTabContent();
    this.showAppliedToast();
    this.generateImages();
    this.bindEvents();

    this.animationLoadingImages(() => {
      this.animationLogo();
    });
  }

  bindEvents () {
    let $win = $(window);

    $win.on('resize orientationchange', () => {
      this.resizeTabContent();
    });
  }

  generateImages () {
    angular.forEach(this.imageUrls, (targetGroup, key) => {
      this.images[key] = [];

      angular.forEach(targetGroup, (imageUrl) => {
        let image = new Image();
        image.src = imageUrl;
        this.images[key].push(image);
      });
    });
  }

  checkTabPosition (targetIndex) {
    if (this.positionTabIndex === targetIndex) {
      return 'current';
    } else if (this.positionTabIndex > targetIndex) {
      return 'left';
    } else {
      return 'right';
    }
  }

  showAppliedToast () {
    if (location.hash !== '#applied') {
      return;
    }

    this.timeout(() => {
      this.isVisibleAppliedToast = true;
    }, 1000);

    this.timeout(() => {
      this.isVisibleAppliedToast = false;
    }, 5000);
  }

  changeTab (targetIndex) {
    this.positionTabIndex = targetIndex;

    this.timeout(() => {
      this.resizeTabContent();
    });
  }

  resizeTabContent () {
    let $tabContents = $('#jsi-tab-contents');
    let $tabContentItems = $tabContents.find('.md-tab-contents-item');
    let $targetContent = $tabContentItems.eq(this.positionTabIndex);
    let contentHeight = $targetContent.outerHeight();

    $tabContents.height(contentHeight);
  }

  startKvInterval () {
    let $mvBackground = $('#jsi-mvbackground').find('img');

    this.interval(() => {
      $mvBackground.eq(this.kvIndex - 1).css('opacity', 0);

      if (this.kvIndex === KV_LENGTH) {
        this.kvIndex = 1;
      } else {
        this.kvIndex++;
      }

      $mvBackground.eq(this.kvIndex - 1).css('opacity', 1);
    }, 10000);
  }

  scrollTo (e, targetId) {
    let $target = $(`#${targetId}`);
    let targetOffsetTop = $target.offset().top - $('#jsi-header').outerHeight();

    this.$htmlbody.stop().animate({
      scrollTop: targetOffsetTop
    }, 600);
  }

  animationLoadingImages (callback) {
    let images = [];

    angular.forEach(this.images, (imageGroup, key) => {
      angular.forEach(this.images[key], (image) => {
        images.push(image);
      });
    });

    let interval = setInterval(() => {
      let completeCount = 0;

      angular.forEach(images, (image) => {
        if (image.complete) {
          completeCount++;
        }
      });

      if (completeCount === images.length) {
        clearInterval(interval);
        callback();
      }

      let barHeight = (completeCount / images.length) * BAR_MAX_HEIGHT;

      this.$logoBar.height(barHeight);
    }, 10);
  }

  animationLogo () {
    let shownCount = 0;
    let nextCount = 0;
    let completedFlags = [];
    let $visualBackground = $('#jsi-mvbackground');

    this.$logoImages = this.$logo.find('img');

    $visualBackground.find('img:eq(0)').css({
      opacity: 1
    });

    this.startKvInterval();

    for (let i = 0; i < this.$logoImages.length; i++) {
      completedFlags[i] = false;
    }

    let interval = setInterval(() => {
      nextCount = shownCount + Math.ceil(this.$logoImages.length / 20);

      for (let i = shownCount; i < nextCount; i++) {
        let randomIndex;
        let isFoundRandom = false;

        if (i >= this.$logoImages.length) {
          break;
        }

        while (!isFoundRandom) {
          randomIndex = Math.round(Math.random() * (this.$logoImages.length - 1));

          if (!completedFlags[randomIndex]) {
            completedFlags[randomIndex] = true;
            isFoundRandom = true;
          }
        }

        this.$logoImages.eq(randomIndex).css({
          opacity: 1
        });

        setTimeout(() => {
          this.$logoImages.eq(randomIndex).animate({
            opacity: 0
          }, Math.random() * 100, () => {
            this.$logoImages.eq(randomIndex).animate({
              opacity: 1
            }, Math.random() * 500);
          });
        }, Math.random() * 500);
      }

      shownCount = nextCount;

      if (shownCount >= this.$logoImages.length) {
        clearInterval(interval);

        setTimeout(() => {
          this.showTypes();
        }, 250);
      }
    }, 50);
  }

  showTypes () {
    let $logoTypes = $('#jsi-logotypes').find('> img');
    let shownCount = 0;

    let interval = setInterval(() => {
      $logoTypes.eq(shownCount).css({
        marginLeft: -39,
        opacity: 1
      });

      shownCount++;

      if (shownCount >= $logoTypes.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.showButtons();
        }, 300);
      }
    }, 200);
  }

  showButtons () {
    let $logoTypes = $('#jsi-logotypes');
    let $logo = $('#jsi-logo');
    let $paragraph = $('#jsi-mvparagraph');
    let $entryButton = $('#jsi-mventrybutton');

    $logo.css({
      top: -140
    });

    $logoTypes.css({
      top: -140
    });

    $paragraph.css({
      display: 'block'
    });

    $entryButton.css({
      display: 'block'
    });

    setTimeout(() => {
      $paragraph.css({
        opacity: 1
      });

      $entryButton.css({
        opacity: 1
      });
    }, 300);
  }

  validateNumber (value) {
    return /^[0-9]+$/.test(value);
  }

  validateEmail (value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  }

  validatePhone (value) {
    return /^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/.test(value);
  }
}

angular.module('BRCD', [
  'ngMessages',
  'ui.validate'
])
  .controller('MainController', MainController)
;

initScrollController();
