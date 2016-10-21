export default function () {
  let scrollCtrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  let createScene = (sceneName) => {
    return new ScrollMagic.Scene({
      duration: 1,
      triggerElement: `#${sceneName}`
    })
      .on('enter', () => {
        $(`#${sceneName}`).find('.md-prev,.md-next').addClass('visible');
      })
      .on('leave', () => {
        $(`#${sceneName}`).find('.md-prev,.md-next').removeClass('visible');
      })
      .addTo(scrollCtrl)
    ;
  };

  createScene('initial');
  createScene('weare');
  createScene('finding');
  createScene('bizreachis');
  createScene('designer');
  createScene('productivity');
  createScene('member');
  createScene('requirements');
  createScene('form');

  new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: '#initial',
    triggerHook: 'onLeave'
  })
    .on('progress', (e) => {
      let $header = $('#jsi-header');
      let $globalnav = $header.find('nav');
      let $logo = $header.find('h1');

      if (Math.ceil(e.progress)) {
        $globalnav.css('display', 'block');
      } else {
        $globalnav.css('display', 'none');
      }

      $header.css({
        backgroundColor: `rgba(0, 0, 0, ${0.8 * e.progress})`
      });

      $globalnav.css({
        opacity: e.progress
      });

      $logo.css({
        top: 33 - ((33 - 17) * e.progress),
        width: 186 - ((186 - 147) * e.progress)
      });
    })
    .addTo(scrollCtrl)
  ;
}
