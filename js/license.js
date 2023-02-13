var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

let style = `
  <style>
  .lw-overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
  }.lw-overlay:target {
    visibility: visible;
    opacity: 1;
  }.lw-popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 35%;
    position: relative;
    transition: all 2s ease-in-out;
  }.lw-popup .content {
    max-height: 30%;
    overflow: auto;
  }.lw-popup .span {
	font-weight: bold;
	padding: 1px 4px;
	border-radius: 3px;
	background: #737373;
	margin: 0 3px;
  }  
  </style>
`

let warning = `
  <div id="popup" class="lw-overlay">
    <div class="lw-popup" align="center">
	  <img src="img/logo.png" width="95%">
      <h2>Привет!</h2>
      <div class="lw-content">
        <p>
          Не пугайся, ты попал на страничку приглашение на рп-проект <b>The All ContinentsRP</b>. 
		  <br>
		  Перед тем как зайти и присоединится к нашему проекту знай:<br>
		  Этот проект работает уже 4 месяц и сейчас идет 3 сезон. Всю нужную информацию можно найти в двух каналах: <b>📕гайд</b> и <b>📚конституция</b>. Если ты чего то не понимаешь, то не пугайся. Просто обратись к администрации проекта.
		  <br><br>
          <a href="https://discord.gg/Pn8ceku8hp" class="btn">Присоединиться</a>
        </p>
      </div>
    </div>
  </div>
`

if (window.tosAgreed !== true) {
  $("head").prepend(style)
  $("body").append(warning)
}

}
/*
     FILE ARCHIVED ON 06:36:12 Feb 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:18:50 Oct 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 204.291
  exclusion.robots: 0.091
  exclusion.robots.policy: 0.085
  cdx.remote: 0.054
  esindex: 0.007
  LoadShardBlock: 170.679 (3)
  PetaboxLoader3.datanode: 111.28 (5)
  CDXLines.iter: 22.6 (3)
  PetaboxLoader3.resolve: 84.744 (2)
  load_resource: 103.55
  loaddict: 32.028
*/