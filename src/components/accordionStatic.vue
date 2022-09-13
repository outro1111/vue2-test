<template>
  <div id="accordions" class="accordions">
    <dl class="accordionItem open">
      <dt class="accordionHeading"><button>고정 메뉴1</button></dt>
      <dd><div>Vue(/vjuː/ 로 발음, view 와 발음이 같습니다.)는 사용자 인터페이스를 만들기 위한 진보적인 프레임워크 입니다. 다른 단일형 프레임워크와 달리 Vue는 점진적으로 채택할 수 있도록 설계하였습니다. 핵심 라이브러리는 뷰 레이어만 초점을 맞추어 다른 라이브러리나 기존 프로젝트와의 통합이 매우 쉽습니다. 그리고 Vue는 현대적 도구 및 지원하는 라이브러리와 함께 사용한다면 정교한 단일 페이지 응용프로그램을 완벽하게 지원할 수 있습니다.
      <br /><img src="../assets/logo.png" alt="logo" /></div></dd>
    </dl>
    <dl class="accordionItem">
      <dt class="accordionHeading"><button>고정 메뉴2</button></dt>
      <dd><div>공식 가이드는 HTML, CSS 및 JavaScript에 대한 중간 수준의 지식을 전제로 합니다. 프론트 엔드 개발에 완전히 익숙하지 않다면 첫 번째 단계로 프레임워크를 시작하는 것은 좋은 생각이 아닙니다. 기본을 파악한 다음 다시 해보세요! 다른 프레임워크에 대한 사전 경험이 도움 되지만 필수는 아닙니다.
      <br /><img src="../assets/logo.png" alt="logo" /></div></dd>
    </dl>
    <dl class="accordionItem">
      <dt class="accordionHeading"><button>고정 메뉴3</button></dt>
      <dd><div>우리는 이미 첫 Vue 앱을 만들었습니다! 문자열 템플릿을 렌더링하는 것과 매우 유사하지만 사실 Vue는 더 많은 작업을 합니다. 데이터와 DOM이 연결되어 이제 모든 것이 반응형입니다. 어떻게 알 수 있을까요? 브라우저의 JavaScript 콘솔을 열고 app.message를 다른 값으로 설정해 보십시오. 그에 따라 렌더링 된 예제를 볼 수 있습니다.
      <br /><img src="../assets/logo.png" alt="logo" /></div></dd>
    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {

  },
  mounted(){
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionHeading');
    var i;
    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', function(){
        var itemClass = this.parentNode.className;
        var itemHeight = this.nextSibling.childNodes[0].offsetHeight; //컨텐츠의 높이값 가져오기
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem';
            accItem[i].childNodes[1].style.maxHeight = '0px'; //열린컨텐츠 이외의 컨텐츠 닫기
        }
        if (itemClass == 'accordionItem') {
            this.parentNode.className = 'accordionItem open';
            this.nextSibling.style.maxHeight = (itemHeight + 200) + 'px'; //클릭 된 This 컨텐츠에 max height 설정
            // console.log(itemHeight)
        }
      });
    }
  }
}
</script>

<style scoped>
.accordions dl {background:#eee;margin:10px 0;padding:10px}
.accordions dl dt button {position:relative;width:100%;text-align:left;padding-right:20px}
.accordions dl dt button:after {content:"";position:absolute;right:5px;top:5px;width:17px;height:10px;background:url("../assets/images/ico_down.png") right center no-repeat;}
.accordions dl.open dt button:after {transform: rotate(-180deg);}
.accordions dl dd {background:#fff;padding:0 10px;transition:.3s ease;max-height:0;overflow:hidden}
.accordions dl.open dd {max-height:none;margin-top:10px;padding:10px;transition:.4s ease;}
</style>
