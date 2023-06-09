/*! Wowchemy v5.3.0 | https://wowchemy.com/ */
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */

;(()=>{
    (()=>{
        var a = document.body, e, f;
        function b() {
            return parseInt(localStorage.getItem("wcTheme") || 2)
        }
        function c() {
            return Boolean(window.wc.darkLightEnabled)
        }
        function d() {
            if (!c())
                return console.debug("User theming disabled."),
                {
                    isDarkTheme: window.wc.isSiteThemeDark,
                    themeMode: window.wc.isSiteThemeDark ? 1 : 0
                };
            console.debug("User theming enabled.");
            let d, e = b();
            switch (console.debug(`User's theme variation: ${e}`),
            e) {
            case 0:
                d = !1;
                break;
            case 1:
                d = !0;
                break;
            default:
                window.matchMedia("(prefers-color-scheme: dark)").matches ? d = !0 : window.matchMedia("(prefers-color-scheme: light)").matches ? d = !1 : d = window.wc.isSiteThemeDark;
                break
            }
            return d && !a.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"),
            document.body.classList.add("dark")) : !d && a.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"),
            document.body.classList.remove("dark")),
            {
                isDarkTheme: d,
                themeMode: e
            }
        }
        e = !1,
        f = !1,
        window.wc = {
            darkLightEnabled: e,
            isSiteThemeDark: f
        },
        window.netlifyIdentity && window.netlifyIdentity.on("init", a=>{
            a || window.netlifyIdentity.on("login", ()=>{
                document.location.href = "/admin/"
            }
            )
        }
        ),
        d(),
        window.PlotlyConfig = {
            MathJaxConfig: "local"
        }
    }
    )()
}
)()