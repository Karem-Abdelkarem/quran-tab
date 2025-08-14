import "./style.scss";
import { labelClickEvent } from "./utils";

const labelElements = document.querySelectorAll("label");

labelElements.forEach(labelClickEvent);
