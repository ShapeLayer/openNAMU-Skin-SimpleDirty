const defaultSkinSettings = {
    skinSettingsVersion: 1,
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
    let skinSettingsKeys = Object.keys(defaultSkinSettings)
    for (let i = 1; i < skinSettingsKeys.length; i++) {
        setCookie(skinSettingsKeys[i], document.getElementById(skinSettingsKeys[i] + '__input').value, new Date('9999-1-01T00:00:00').getTime())
    }
    toastSnackBar('저장되었습니다.', 5000)
    loadSkinSettings()
}

function resetSkinSettings () {
    let skinSettingsKeys = Object.keys(defaultSkinSettings)
    for (let i = 0; i < skinSettingsKeys.length; i++) {
        setCookie(skinSettingsKeys[i], defaultSkinSettings[skinSettingsKeys[i]], new Date('9999-1-01T00:00:00').getTime())
    }
    for (let i = 1; i < skinSettingsKeys.length; i++) {
        document.getElementById(skinSettingsKeys[i] + '__input').value = defaultSkinSettings[skinSettingsKeys[i]]
        changeTextfieldColor(skinSettingsKeys[i] + '__cb', defaultSkinSettings[skinSettingsKeys[i]])
    }
    toastSnackBar('재설정되었습니다.', 5000)
    loadSkinSettings()
}

function loadSkinSettingsElements (targetClassName, style) {
    let targetElements = document.getElementsByClassName(targetClassName)
    for (let i = 0; i < targetElements.length; i++) {
        targetElements[i].style = style
    }
}

function loadSkinSettings () {
    loadSkinSettingsElements('colorMDLMenu', 'background-color: ' + getCookie('colorMDLMenu') + ';')
    loadSkinSettingsElements('colorMDLMenuColor', 'color: ' + getCookie('colorMDLMenuColor') + ';')
    loadSkinSettingsElements('colorMDLFooter', 'background-color: ' + getCookie('colorMDLFooter') + ';')
    loadSkinSettingsElements('colorMDLFooterLogo', 'color: ' + getCookie('colorMDLFooterLogo') + ';')
    loadSkinSettingsElements('colorMDLFooterColor', 'color: ' + getCookie('colorMDLFooterColor') + ';')
    loadSkinSettingsElements('colorMDLNav', 'background-color: ' + getCookie('colorMDLNav') + ';')
    loadSkinSettingsElements('colorMDLNavColor', 'color: ' + getCookie('colorMDLNavColor') + ';')
    let aTags = document.getElementsByTagName('a')
    console.log(aTags)
    for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].id === 'out_link') {
            aTags[i].style = 'color: ' + getCookie('colorMDLLinkOuter') + ';'
        } else if (aTags[i].className == '' || aTags[i].className == 'menu-item') {
            aTags[i].style = 'color: ' + getCookie('colorMDLLink') + ';'
        }
    }
}

function loadSkinSettingsPage () {
    let displayElement = document.getElementById('main_skin_set')

    let s = defaultSkinSettings

    /* Return innerHTML */
    displayElement.innerHTML = `
    <hr>
    <p>스킨 설정은 이 기기의 로컬 쿠키 저장소에 저장합니다. 이 설정이 다른 기기에서 유지되지 않고 이 기기의 다른 사용자가 이 설정에 영향을 받습니다.</p>

    <h2>개인 설정</h2>

    <h3>색</h3>

    <p>스킨의 색상을 변경할 수 있습니다.</p>
    <p>기술적인 문제로 페이지를 이동할때마다 페이지 로드 초반에 기본값 색상이 나타날수 있으므로 색 설정을 변경하는것을 권장하지 않습니다. <a href="https://github.com/kpjhg0124/openNAMU-Skin-SimpleDirty/tree/master/.github/changing-color-settings.md#스킨-색-설정을-개인화하는것은-권장하지-않습니다" target="_blank">자세히 알아보기</a></p>

    <h4>상단</h4>

    <div>
        <div class="colorbox" id="colorMDLMenu__cb" style="background-color: ` + s['colorMDLMenu'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLMenu__input" onchange="changeTextfieldColor('colorMDLMenu__cb', this.value)" value="` + s['colorMDLMenu'] + `">
            <label class="mdl-textfield__label" for="colorMDLMenu__input" id="colorMDLMenu__label">상단바</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLMenuColor__cb" style="background-color: ` + s['colorMDLMenuColor'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLMenuColor__input" onchange="changeTextfieldColor('colorMDLMenuColor__cb', this.value)" value="` + s['colorMDLMenuColor'] + `">
            <label class="mdl-textfield__label" for="colorMDLMenuColor__input" id="colorMDLMenuColor__label">상단바 글자색</label>
        </div>
    </div>

    <h4>본문</h4>

    <div>
        <div class="colorbox" id="colorMDLLink__cb" style="background-color: ` + s['colorMDLLink'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLLink__input" onchange="changeTextfieldColor('colorMDLLink__cb', this.value)" value="` + s['colorMDLLink'] + `">
            <label class="mdl-textfield__label" for="colorMDLLink__input" id="colorMDLLink__label">링크</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLLinkInner0__cb" style="background-color: ` + s['colorMDLLinkInner0'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLLinkInner0__input" onchange="changeTextfieldColor('colorMDLLinkInner0__cb', this.value)" value="` + s['colorMDLLinkInner0'] + `" disabled>
            <label class="mdl-textfield__label" for="colorMDLLinkInner0__input" id="colorMDLLinkInner0__label">내부 링크(문서 없음)</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLLinkInner1__cb" style="background-color: ` + s['colorMDLLinkInner1'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLLinkInner1__input" onchange="changeTextfieldColor('colorMDLLinkInner1__cb', this.value)" value="` + s['colorMDLLinkInner1'] + `" disabled>
            <label class="mdl-textfield__label" for="colorMDLLinkInner1__input" id="colorMDLLinkInner1__label">내부 링크(문서 존재)</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLLinkOuter__cb" style="background-color: ` + s['colorMDLLinkOuter'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLLinkOuter__input" onchange="changeTextfieldColor('colorMDLLinkOuter__cb', this.value)" value="` + s['colorMDLLinkOuter'] + `">
            <label class="mdl-textfield__label" for="colorMDLLinkOuter__input" id="colorMDLLinkOuter__label">외부 링크</label>
        </div>
    </div>

    <h4>하단</h4>
    <div>
        <div class="colorbox" id="colorMDLFooter__cb" style="background-color: ` + s['colorMDLFooter'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLFooter__input" onchange="changeTextfieldColor('colorMDLFooter__cb', this.value)" value="` + s['colorMDLFooter'] + `">
            <label class="mdl-textfield__label" for="colorMDLFooter__input" id="colorMDLFooter__label">하단(푸터)</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLFooterLogo__cb" style="background-color: ` + s['colorMDLFooterLogo'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLFooterLogo__input" onchange="changeTextfieldColor('colorMDLFooterLogo__cb', this.value)" value="` + s['colorMDLFooterLogo'] + `">
            <label class="mdl-textfield__label" for="colorMDLFooterLogo__input" id="colorMDLFooterLogo__label">하단(푸터) 로고색</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLFooterColor__cb" style="background-color: ` + s['colorMDLFooterColor'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLFooterColor__input" onchange="changeTextfieldColor('colorMDLFooterColor__cb', this.value)" value="` + s['colorMDLFooterColor'] + `">
            <label class="mdl-textfield__label" for="colorMDLFooterColor__input" id="colorMDLFooterColor__label">하단(푸터) 글자색</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLNav__cb" style="background-color: ` + s['colorMDLNav'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLNav__input" onchange="changeTextfieldColor('colorMDLNav__cb', this.value)" value="` + s['colorMDLNav'] + `">
            <label class="mdl-textfield__label" for="colorMDLNav__input" id="colorMDLNav__label">네비게이션 바</label>
        </div>
    </div>

    <div>
        <div class="colorbox" id="colorMDLNavColor__cb" style="background-color: ` + s['colorMDLNavColor'] + `;"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="colorMDLNavColor__input" onchange="changeTextfieldColor('colorMDLNavColor__cb', this.value)" value="` + s['colorMDLNavColor'] + `">
            <label class="mdl-textfield__label" for="colorMDLNavColor__input" id="colorMDLNavColor__label">네비게이션 바 아이콘 색</label>
        </div>
    </div>

    
    <div><button onclick="saveSkinSettings()">저장</button><button onclick="resetSkinSettings()">기본값으로 변경</button></div>
    <hr>
    <h2>실험실</h2>
    `
}