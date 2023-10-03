import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

const uReveal = trigger("uReveal", [
  transition(":enter", [
    style({ transform: "translateY(30%)", opacity: 0 }),
    animate("400ms ease", style({ transform: "translateY(0%)", opacity: 1 })),
  ]),
  transition(":leave", [
    style({ transform: "translateY(0%)", opacity: 1 }),
    animate("400ms ease", style({ transform: "translateY(30%)", opacity: 0 })),
  ]),
]);

const rReveal = trigger("rReveal", [
  transition(":enter", [
    style({ transform: "translateX(100%)", overflow: "hidden" }),
    animate("400ms ease", style({ transform: "translateX(0%)" })),
  ]),
  transition(":leave", [
    style({ transform: "translateX(0%)" }),
    animate(
      "400ms ease",
      style({ transform: "translateX(100%)", overflow: "hidden" })
    ),
  ]),
]);
const hReveal = trigger("hReveal", [
  transition(":enter", [
    style({ height: "0", overflow: "hidden" }),
    animate("300ms ease", style({ height: "*", overflow: "*" })),
  ]),
  transition(":leave", [
    style({ height: "*", overflow: "*" }),
    animate("300ms ease", style({ height: "0", overflow: "hidden" })),
  ]),
]);

const fade = trigger("fade", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("400ms ease", style({ opacity: 1 })),
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate("400ms ease", style({ opacity: 0 })),
  ]),
]);
export { uReveal, fade, hReveal, rReveal };
