import { library } from "@fortawesome/fontawesome-svg-core";
import { faServer, faUtensils, faLink, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(faServer);
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faUtensils);
}

export default initFontAwesome;
