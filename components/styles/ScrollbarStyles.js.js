import { createGlobalStyle } from "styled-components";

export const ScrollbarStyles = createGlobalStyle`
  /* Webkit (Safari, Chrome) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: limegreen;
  }

  /* Firefox */
/* For Firefox, you need to set the overflow property to "overlay",
     to enable scrollbar rules */
  /* Make sure to set overflow on the element to be scrolled */  
  .scrollable-element {
    overflow: overlay;
  }

  .scrollable-element::-webkit-scrollbar {
    width: 8px;
  }

  .scrollable-element::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  .scrollable-element::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  .scrollable-element::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
