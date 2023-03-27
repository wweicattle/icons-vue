import type { App } from "vue";
import "./index.css";
export interface InstallOptions {
    /** @default `Tq` */
    prefix?: string;
}
declare const instal: {
    install: () => App;
};
export default instal;
