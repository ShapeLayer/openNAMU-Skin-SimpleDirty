const defaultSettings = {
    colorMDLMenu: '#494e52',
    colorMDLMenuColor: '#ffffff',
    colorMDLLink: '#ff4081',
    colorMDLLinkInner0: '#ff9d9c',
    colorMDLLinkInner1: '#5193e8',
    colorMDLLinkOuter: '#008000',
    colorMDLFooter: '#424242',
    colorMDLFooterLogo: '#ffffff',
    colorMDLFooterColor: '#9e9e9e',
    colorMDLNav: '#ff4081',
    colorMDLNavColor: '#ffffff'
}

function changeTextfieldColor (targetId, inputValue) {
    document.getElementById(targetId).style.backgroundColor = inputValue
}

function saveSkinSettings () {
    toastSnackBar('저장되었습니다.', 5000)
}

function resetSkinSettings () {
    toastSnackBar('재설정되었습니다.', 5000)
}

function loadSkinSettings () {
    let displayElement = document.getElementById('main_skin_set')

    let s = defaultSettings

    /* Return innerHTML */
    displayElement.innerHTML = `
    <hr>
    <h2>개인 설정</h2>

    <h3>색</h3>

    <p>스킨의 색상을 변경할 수 있습니다.</p>
    <p>기술적인 문제로 페이지를 이동할때마다 페이지 로드 초반에 기본값 색상이 나타날수 있으므로 색 설정을 변경하는것을 권장하지 않습니다. <a href="https://github.com/kpjhg0124/openNAMU-Skin-SimpleDirty/tree/master/.github/changing-color-settings.md#스킨-색-설정을-개인화하는것은-권장하지-않습니다." target="">자세히 알아보기</a></p>

    <h4>상단</h4>

    <div>
        <div class="colorbox" id="color__mdl-menu__cb" style="background-color: ` + s['colorMDLMenu'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-menu__input" onchange="changeTextfieldColor('color__mdl-menu__cb', this.value)" value="` + s['colorMDLMenu'] + `">
            <label class="mdl-textfield__label" for="color__mdl-menu__input" id="color__mdl-menu__label">상단바</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-menu-color__cb" style="background-color: ` + s['colorMDLMenuColor'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-menu-color__input" onchange="changeTextfieldColor('color__mdl-menu-color__cb', this.value)" value="` + s['colorMDLMenuColor'] + `">
            <label class="mdl-textfield__label" for="color__mdl-menu-color__input" id="color__mdl-menu-color__label">상단바 글자색</label>
        </div>
    </div>

    <h4>본문</h4>

    <div>
        <div class="colorbox" id="color__mdl-link__cb" style="background-color: ` + s['colorMDLLink'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-link__input" onchange="changeTextfieldColor('color__mdl-link__cb', this.value)" value="` + s['colorMDLLink'] + `">
            <label class="mdl-textfield__label" for="color__mdl-link__input" id="color__mdl-link__label">링크</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-link-inner-0__cb" style="background-color: ` + s['colorMDLLinkInner0'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-link-inner-0__input" onchange="changeTextfieldColor('color__mdl-link-inner-0__cb', this.value)" value="` + s['colorMDLLinkInner0'] + `">
            <label class="mdl-textfield__label" for="color__mdl-link-inner-0__input" id="color__mdl-link-inner-0__label">내부 링크(문서 없음)</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-link-inner-1__cb" style="background-color: ` + s['colorMDLLinkInner1'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-link-inner-1__input" onchange="changeTextfieldColor('color__mdl-link-inner-1__cb', this.value)" value="` + s['colorMDLLinkInner1'] + `">
            <label class="mdl-textfield__label" for="color__mdl-link-inner-1__input" id="color__mdl-link-inner-1__label">내부 링크(문서 존재)</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-link-outer__cb" style="background-color: ` + s['colorMDLLinkOuter'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-link-outer__input" onchange="changeTextfieldColor('color__mdl-link-outer__cb', this.value)" value="` + s['colorMDLLinkOuter'] + `">
            <label class="mdl-textfield__label" for="color__mdl-link-outer__input" id="color__mdl-link-outer__label">외부 링크</label>
        </div>
    </div>

    <h4>하단</h4>
    <div>
        <div class="colorbox" id="color__mdl-footer__cb" style="background-color: ` + s['colorMDLFooter'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-footer__input" onchange="changeTextfieldColor('color__mdl-footer__cb', this.value)" value="` + s['colorMDLFooter'] + `">
            <label class="mdl-textfield__label" for="color__mdl-footer__input" id="color__mdl-footer__label">하단(푸터)</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-footer-logo__cb" style="background-color: ` + s['colorMDLFooterLogo'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-footer-logo__input" onchange="changeTextfieldColor('color__mdl-footer-logo__cb', this.value)" value="` + s['colorMDLFooterLogo'] + `">
            <label class="mdl-textfield__label" for="color__mdl-footer-logo__input" id="color__mdl-footer-logo__label">하단(푸터) 로고색</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-footer-color__cb" style="background-color: ` + s['colorMDLFooterColor'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-footer-color__input" onchange="changeTextfieldColor('color__mdl-footer-color__cb', this.value)" value="` + s['colorMDLFooterColor'] + `">
            <label class="mdl-textfield__label" for="color__mdl-footer-color__input" id="color__mdl-footer-color__label">하단(푸터) 글자색</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-nav__cb" style="background-color: ` + s['colorMDLNav'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-nav__input" onchange="changeTextfieldColor('color__mdl-nav__cb', this.value)" value="` + s['colorMDLNav'] + `">
            <label class="mdl-textfield__label" for="color__mdl-nav__input" id="color__mdl-nav__label">네비게이션 바</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="color__mdl-nav-color__cb" style="background-color: ` + s['colorMDLNavColor'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="color__mdl-nav-color__input" onchange="changeTextfieldColor('color__mdl-nav-color__cb', this.value)" value="` + s['colorMDLNavColor'] + `">
            <label class="mdl-textfield__label" for="color__mdl-nav-color__input" id="color__mdl-nav-color__label">네비게이션 바 아이콘 색</label>
        </div>
    </div>

    
    <div><button onclick="saveSkinSettings()">저장</button><button onclick="resetSkinSettings()">기본값으로 변경</button></div>
    <hr>
    <h2>실험실</h2>

    <script>loadSkinSettingsElements()</script>
    `
}