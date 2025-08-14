import "./style.scss";
import { labelClickEvent, sectionsAnimation } from "./utils";

const labelElements = document.querySelectorAll("label");
const sectionsElements = document.querySelectorAll("section");

labelElements.forEach(labelClickEvent);
sectionsAnimation(sectionsElements);
