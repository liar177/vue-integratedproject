!(function(t) {
  var a,
    e,
    l,
    c,
    n,
    o,
    i =
      '<svg><symbol id="icon-ico-news" viewBox="0 0 1024 1024"><path d="M873.12 289.776h-55.568V123.104A111.216 111.216 0 0 0 706.448 12H150.88A111.216 111.216 0 0 0 39.776 123.104v777.792a111.216 111.216 0 0 0 111.12 111.104h722.208a111.216 111.216 0 0 0 111.12-111.104v-500a111.216 111.216 0 0 0-111.12-111.12zM95.312 900.896V123.104a55.632 55.632 0 0 1 55.568-55.552h555.552a55.632 55.632 0 0 1 55.552 55.552v833.344H150.896a55.632 55.632 0 0 1-55.568-55.552z m833.328 0a55.632 55.632 0 0 1-55.552 55.552h-55.552V345.328h55.568a55.632 55.632 0 0 1 55.552 55.568v500z"  ></path><path d="M206.432 353.664a13.888 13.888 0 0 0 13.904-13.888V252.32l63.44 95.168a13.904 13.904 0 0 0 25.44-7.712v-133.344a13.888 13.888 0 1 0-27.792 0v87.472l-63.424-95.168a13.888 13.888 0 0 0-25.44 7.712v133.328a13.888 13.888 0 0 0 13.872 13.888z m166.672 0h88.896a13.888 13.888 0 1 0 0-27.776h-75.008v-38.88h75.008a13.888 13.888 0 1 0 0-27.792h-75.008V220.32h75.008a13.888 13.888 0 1 0 0-27.776h-88.896a13.888 13.888 0 0 0-13.888 13.888v133.344a13.888 13.888 0 0 0 13.888 13.888z m162.56-0.048a14.176 14.176 0 0 0 14.448-9.2l34.096-96.352 34.128 96.352a13.92 13.92 0 0 0 13.104 9.248c0.432 0 0.896 0 1.36-0.048a13.92 13.92 0 0 0 12.4-11.84l19.456-133.328a13.92 13.92 0 0 0-11.76-15.76 14.064 14.064 0 0 0-15.76 11.76l-11.344 77.792-28.48-80.432c-4-11.072-22.24-11.072-26.192 0l-28.464 80.4-11.328-77.76a14.144 14.144 0 0 0-15.776-11.76 13.92 13.92 0 0 0-11.744 15.76l19.456 133.328a13.92 13.92 0 0 0 12.384 11.84zM650.88 512H206.448a27.776 27.776 0 0 0 0 55.552H650.88a27.776 27.776 0 1 0 0-55.552z m0 138.88H206.448a27.776 27.776 0 1 0 0 55.568H650.88a27.776 27.776 0 1 0 0-55.552z m0 138.896H206.448a27.776 27.776 0 0 0 0 55.568H650.88a27.776 27.776 0 1 0 0-55.568z"  ></path></symbol><symbol id="icon-Icon-yemian-copy-copy" viewBox="0 0 1024 1024"><path d="M567.808 38.144a79.232 79.232 0 0 0-106.496 0L30.72 447.04a39.68 39.68 0 0 0 53.184 59.008l6.848-6.528v426.752a79.424 79.424 0 0 0 79.424 79.552h231.232V766.72a55.936 55.936 0 0 1 55.936-56h108.8a55.936 55.936 0 0 1 56 56v239.168h236.672a79.488 79.488 0 0 0 79.488-79.552V504.768c17.6 16 42.688 14.72 57.344-1.6a39.68 39.68 0 0 0-2.88-56.128L567.808 38.208z"  ></path></symbol><symbol id="icon-Icon-huiyuan" viewBox="0 0 1024 1024"><path d="M562.199943 417.186275a336.104053 336.104053 0 0 0-85.689894 49.980439 351.206977 351.206977 0 0 0-67.323204 71.482907 327.208686 327.208686 0 0 0-44.028863 87.993731 322.153047 322.153047 0 0 0-15.550892 100.472841c0 30.973793 4.095708 60.603682 12.35112 88.889667 8.255412 28.285985 19.710596 54.908088 34.365552 79.930305h-24.766235c-17.662742 0-38.333269-0.639954-61.819596-1.791873a2254.751349 2254.751349 0 0 1-72.890806-4.927649 3026.344373 3026.344373 0 0 1-74.682679-7.103494 1768.194016 1768.194016 0 0 1-67.323203-8.511393 851.65132 851.65132 0 0 1-51.324344-8.959362c-14.078997-2.94379-22.974363-5.951576-26.622103-8.959361-6.719521-4.735663-11.711166-19.454614-15.102924-44.156854-3.391758-24.70224-1.983859-56.443978 4.095709-95.097225a77.434483 77.434483 0 0 1 15.166919-36.669387c7.615457-9.535321 16.958792-17.726737 27.902012-24.574249 11.007216-6.847512 23.230345-12.35112 36.669387-16.510824 13.695024-4.223699 27.454044-8.255412 41.277059-12.031142 14.078997-3.839726 27.64603-8.063425 40.765096-12.543107 13.119065-4.479681 25.214203-9.983289 36.221419-16.510823 12.799088-7.743448 22.718381-15.358906 29.75788-22.782377 7.039498-7.423471 12.095138-14.718951 15.166919-21.886441a56.187997 56.187997 0 0 0 4.543676-22.334408 403.811228 403.811228 0 0 0-0.895936-25.918154 48.892516 48.892516 0 0 0-14.718951-32.637674 480.989729 480.989729 0 0 0-28.34998-24.510254 59.195782 59.195782 0 0 1-13.311052-17.40676 219.50436 219.50436 0 0 1-10.559247-22.782376c-3.135777-9.215343-6.207558-18.430687-9.151348-27.710026a42.364981 42.364981 0 0 1-12.799089-6.271553 81.914164 81.914164 0 0 1-11.967147-12.479111 69.75503 69.75503 0 0 1-10.94322-23.230345 76.730533 76.730533 0 0 1-3.711736-27.64603 63.355486 63.355486 0 0 1 5.503608-22.398404c2.431827-6.527535 6.399544-12.799088 11.903152-18.750664 0-22.59039 1.279909-45.244776 3.711736-67.835167 2.431827-19.070641 6.719521-39.677173 12.799088-61.627609a177.26737 177.26737 0 0 1 28.413975-59.003796c12.223129-16.638814 25.342194-30.205848 39.421191-40.637105 14.078997-10.431257 28.733953-18.558678 43.964868-24.574249a200.945683 200.945683 0 0 1 45.436763-12.031142C343.01556 1.023927 357.47853 0 371.557527 0c17.662742 0 35.197492 1.919863 52.668247 5.75959 17.40676 3.903722 33.725597 9.151348 49.020507 15.678883 15.29491 6.527535 28.861944 14.015001 40.765096 22.334408 11.967147 8.319407 21.246486 16.638814 27.966007 24.958222 15.870869 19.134637 27.518039 40.125141 34.81352 63.035509 7.359476 22.910368 12.543106 44.796808 15.614887 65.659321 3.071781 23.806304 4.543676 47.932585 4.543676 72.314848a31.357766 31.357766 0 0 1 10.11128 11.64717c2.431827 4.159704 4.479681 9.535321 5.951576 16.062856 1.535891 6.527535 1.663881 14.59096 0.447968 24.126281-1.215913 13.119065-3.839726 23.358336-7.743448 30.845802a59.131787 59.131787 0 0 1-13.311052 17.40676 46.524685 46.524685 0 0 1-17.40676 9.791302c-1.279909 3.839726-2.559818 7.679453-3.64774 11.64717l-4.607671 12.479111c-1.279909 4.159704-2.751804 8.639384-4.607672 13.439042zM717.260895 447.968082c42.172995 0 81.914164 7.615457 119.223505 22.846372 37.373337 15.166919 69.75503 35.837447 97.401061 62.075578 27.518039 26.11014 49.468475 56.69996 65.723317 91.705466 16.190846 35.005506 24.318267 72.314848 24.318267 111.800034a262.381305 262.381305 0 0 1-24.318267 111.800034 297.96277 297.96277 0 0 1-163.124378 153.397071 318.505306 318.505306 0 0 1-119.223505 22.334408 321.25711 321.25711 0 0 1-120.311428-22.398404 298.026766 298.026766 0 0 1-163.060382-153.333075 262.509296 262.509296 0 0 1-24.318267-111.800034c0-39.549182 8.127421-76.794528 24.318267-111.800034a298.026766 298.026766 0 0 1 65.723318-91.705466A315.497521 315.497521 0 0 1 717.1969 447.968082z m168.308008 253.421944a40.7011 40.7011 0 0 0-5.119635-35.197492 57.979869 57.979869 0 0 0-27.902012-22.590391 50.044434 50.044434 0 0 0-34.877515-0.959931c-11.583175 3.839726-20.158564 13.823015-25.598176 29.88587-2.879795 10.11128-5.75959 20.286555-8.767375 30.397835-2.879795 9.727307-5.631599 19.518609-8.255412 29.437902-2.751804 10.23927-6.079567 21.310482-10.047284 33.213634s-9.023357 25.598176-15.16692 40.957081c-6.079567 16.70281-14.782947 24.638245-26.110139 23.678313-11.327193-1.023927-20.030573-7.935435-26.11014-20.734522a421.921938 421.921938 0 0 1-18.814659-41.469046 15342.906818 15342.906818 0 0 1-16.958792-43.388908c-4.991644-12.799088-9.855298-25.726167-14.718951-38.589251a574.167091 574.167091 0 0 0-10.943221-27.966007 28.925939 28.925939 0 0 0-24.318267-17.342764 63.419481 63.419481 0 0 0-59.579755 27.966007 34.045574 34.045574 0 0 0-3.199772 33.725597c4.863653 14.46297 9.727307 28.925939 14.718951 43.388909 5.631599 16.446828 11.391188 32.829661 17.40676 49.212493 5.951576 16.318837 11.775161 32.637675 17.40676 49.148498 5.503608 16.062856 10.367261 29.885871 14.654956 41.469046 9.151348 24.446258 23.038359 42.748954 41.725027 54.972083 18.622673 12.159134 38.141282 18.622673 58.619823 19.262627 20.478541 0.639954 40.061146-4.159704 58.683819-14.462969 18.622673-10.23927 32.253702-25.726167 40.829091-46.268703a4602.232091 4602.232091 0 0 0 40.765095-106.10444 2186.468214 2186.468214 0 0 0 31.613748-91.577476z"  ></path></symbol><symbol id="icon-pubuliu" viewBox="0 0 1024 1024"><path d="M209.92 0q25.6 0 43.008 17.408t17.408 43.008l0 149.504q0 25.6-17.408 43.008t-43.008 17.408l-149.504 0q-25.6 0-43.008-17.408t-17.408-43.008l0-149.504q0-25.6 17.408-43.008t43.008-17.408l149.504 0zM572.416 603.136q25.6 0 43.008 17.408t17.408 43.008l0 301.056q0 24.576-17.408 41.984t-43.008 17.408l-150.528 0q-25.6 0-43.008-17.408t-17.408-41.984l0-301.056q0-25.6 17.408-43.008t43.008-17.408l150.528 0zM209.92 330.752q25.6 0 43.008 17.92t17.408 42.496l0 573.44q0 24.576-17.408 41.984t-43.008 17.408l-149.504 0q-25.6 0-43.008-17.408t-17.408-41.984l0-573.44q0-24.576 17.408-42.496t43.008-17.92l149.504 0zM933.888 0q25.6 0 43.008 17.408t17.408 43.008l0 301.056q0 24.576-17.408 42.496t-43.008 17.92l-149.504 0q-25.6 0-43.008-17.92t-17.408-42.496l0-301.056q0-25.6 17.408-43.008t43.008-17.408l149.504 0zM933.888 481.28q25.6 0 43.008 17.92t17.408 43.52l0 421.888q0 24.576-17.408 41.984t-43.008 17.408l-149.504 0q-25.6 0-43.008-17.408t-17.408-41.984l0-421.888q0-25.6 17.408-43.52t43.008-17.92l149.504 0zM572.416 0q25.6 0 43.008 17.408t17.408 43.008l0 420.864q0 25.6-17.408 43.52t-43.008 17.92l-150.528 0q-25.6 0-43.008-17.92t-17.408-43.52l0-420.864q0-25.6 17.408-43.008t43.008-17.408l150.528 0z"  ></path></symbol><symbol id="icon-qicheqianlian-" viewBox="0 0 1024 1024"><path d="M908.629333 743.765333H257.877333c-19.285333 0-37.376-7.509333-50.858666-21.162666-13.482667-13.653333-20.992-31.573333-20.821334-50.858667l2.389334-479.232c0-19.114667-6.656-31.914667-39.765334-37.205333h-0.170666l-95.573334-16.384c-9.216-1.536-15.530667-10.410667-13.994666-19.626667 1.536-9.216 10.410667-15.530667 19.626666-13.994667l95.402667 16.384c45.397333 7.168 68.437333 31.061333 68.437333 70.997334L220.16 672.085333c0 10.069333 3.754667 19.456 10.922667 26.453334 7.168 7.168 16.554667 11.093333 26.624 11.093333h650.752c9.386667 0 17.066667 7.68 17.066666 17.066667s-7.509333 17.066667-16.896 17.066666z" fill="" ></path><path d="M859.989333 645.802667l-602.624-1.877334c-18.944-0.170667-36.693333-7.509333-50.005333-20.992-13.312-13.482667-20.48-31.232-20.48-50.176l1.877333-353.962666L870.570667 269.653333c30.890667 1.194667 55.125333 26.282667 55.125333 57.173334V580.266667c0 36.181333-29.525333 65.536-65.706667 65.536zM257.706667 609.792l602.453333 1.877333c17.408 0 31.573333-14.165333 31.573333-31.402666V326.826667c0-12.458667-9.898667-22.698667-22.357333-23.04h-0.682667l-645.632-48.128-1.536 317.44c0 9.728 3.754667 18.944 10.581334 25.941333 6.485333 6.826667 15.701333 10.752 25.6 10.752z" fill="" ></path><path d="M324.096 800.085333m-63.658667 0a63.658667 63.658667 0 1 0 127.317334 0 63.658667 63.658667 0 1 0-127.317334 0Z" fill="#7DE5DB" ></path><path d="M324.096 880.810667c-44.544 0-80.725333-36.181333-80.725333-80.725334s36.181333-80.725333 80.725333-80.725333c44.544 0 80.725333 36.181333 80.725333 80.725333s-36.181333 80.725333-80.725333 80.725334z m0-127.317334c-25.770667 0-46.592 20.821333-46.592 46.592s20.821333 46.592 46.592 46.592 46.592-20.821333 46.592-46.592-20.821333-46.592-46.592-46.592z" fill="" ></path><path d="M812.714667 800.085333m-63.658667 0a63.658667 63.658667 0 1 0 127.317333 0 63.658667 63.658667 0 1 0-127.317333 0Z" fill="#7DE5DB" ></path><path d="M812.714667 880.810667c-44.544 0-80.725333-36.181333-80.725334-80.725334s36.181333-80.725333 80.725334-80.725333 80.725333 36.181333 80.725333 80.725333-36.181333 80.725333-80.725333 80.725334z m0-127.317334c-25.770667 0-46.592 20.821333-46.592 46.592s20.821333 46.592 46.592 46.592 46.592-20.821333 46.592-46.592-20.821333-46.592-46.592-46.592z" fill="" ></path><path d="M710.314667 417.962667H362.496c-9.386667 0-17.066667-7.68-17.066667-17.066667s7.68-17.066667 17.066667-17.066667h347.818667c9.386667 0 17.066667 7.68 17.066666 17.066667s-7.68 17.066667-17.066666 17.066667zM710.314667 516.096H362.496c-9.386667 0-17.066667-7.68-17.066667-17.066667s7.68-17.066667 17.066667-17.066666h347.818667c9.386667 0 17.066667 7.68 17.066666 17.066666s-7.68 17.066667-17.066666 17.066667z" fill="" ></path></symbol></svg>',
    h = (h = document.getElementsByTagName("script"))[
      h.length - 1
    ].getAttribute("data-injectcss");
  if (h && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function d() {
    n || ((n = !0), l());
  }
  (a = function() {
    var t, a, e, l;
    ((l = document.createElement("div")).innerHTML = i),
      (i = null),
      (e = l.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (a = document.body).firstChild
          ? ((l = t), (e = a.firstChild).parentNode.insertBefore(l, e))
          : a.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(a, 0)
        : ((e = function() {
            document.removeEventListener("DOMContentLoaded", e, !1), a();
          }),
          document.addEventListener("DOMContentLoaded", e, !1))
      : document.attachEvent &&
        ((l = a),
        (c = t.document),
        (n = !1),
        (o = function() {
          try {
            c.documentElement.doScroll("left");
          } catch (t) {
            return void setTimeout(o, 50);
          }
          d();
        })(),
        (c.onreadystatechange = function() {
          "complete" == c.readyState && ((c.onreadystatechange = null), d());
        }));
})(window);
