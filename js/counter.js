

$(document).ready(function () {
    var animationStarted = false;

    // 스크롤 이벤트 핸들러를 등록
    $(window).on("scroll", function () {
        if (!animationStarted) {
            if (window.scrollY >= 160) {
                startAnimation();
            }
        }
    });

    function startAnimation() {
        animationStarted = true;

        // 숫자 카운트 애니메이션
        $('.nums').each(function () {
            const $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                    // 3자리 마다 콤마 표시 적용
                }
            });
        });
    }
});
