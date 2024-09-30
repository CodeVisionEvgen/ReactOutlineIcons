import { IconSvgProps } from "../types/icons"
import React from "react"

export const AirplayIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.5 17.5H19C20.1046 17.5 21 16.6046 21 15.5V5.5C21 4.39543 20.1046 3.5 19 3.5H5C3.89543 3.5 3 4.39543 3 5.5V15.5C3 16.6046 3.89543 17.5 5 17.5H5.5M7.56473 19.7094L11.5931 14.0696C11.7925 13.7904 12.2075 13.7904 12.4069 14.0696L16.4353 19.7094C16.6717 20.0403 16.4351 20.5 16.0284 20.5H7.97159C7.56491 20.5 7.32835 20.0403 7.56473 19.7094Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)
export const ReAnalyzeIcon: React.FC<IconSvgProps> = ({
  ...props
}) => (
  <svg width={props.size || 22} height={props.size || 22} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 19H6.23607C4.7493 19 3.78231 17.4354 4.44722 16.1056L8 9V5C8 3.89543 8.89543 3 10 3H12C13.1046 3 14 3.89543 14 5V9M11 19H16C17.1046 19 18 18.1046 18 17M11 19L13 21M11 19L13 17M21 12H16C14.8954 12 14 12.8954 14 14M21 12L19 10M21 12L19 14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>
);
export const AnalyzeIcon: React.FC<IconSvgProps> = ({
  ...props
}) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.99997 7V3C4.99997 1.89543 5.8954 1 6.99997 1H8.99997C10.1045 1 11 1.89543 11 3V7L14.5528 14.1056C15.2177 15.4354 14.2507 17 12.7639 17H3.23604C1.74927 17 0.782283 15.4354 1.44718 14.1056L4.99997 7Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} stroke-linecap="square" />
  </svg>

);
export const CopyIcon: React.FC<IconSvgProps> = ({
  ...props
}) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 9H6.51429C5.6342 9 5.19416 9 4.85802 9.17128C4.56233 9.32193 4.32193 9.56233 4.17128 9.85802C4 10.1942 4 10.6342 4 11.5143V17.4857C4 18.3658 4 18.8058 4.17128 19.142C4.32193 19.4377 4.56233 19.6781 4.85802 19.8287C5.19416 20 5.6342 20 6.51429 20H12.4857C13.3658 20 13.8058 20 14.142 19.8287C14.4377 19.6781 14.6781 19.4377 14.8287 19.142C15 18.8058 15 18.3658 15 17.4857V15M9 9H12.4857C13.3658 9 13.8058 9 14.142 9.17128C14.4377 9.32193 14.6781 9.56233 14.8287 9.85802C15 10.1942 15 10.6342 15 11.5143V15M9 9V6.51429C9 5.6342 9 5.19416 9.17128 4.85801C9.32193 4.56233 9.56233 4.32193 9.85802 4.17128C10.1942 4 10.6342 4 11.5143 4H17.4857C18.3658 4 18.8058 4 19.142 4.17128C19.4377 4.32193 19.6781 4.56233 19.8287 4.85801C20 5.19416 20 5.6342 20 6.51429V12.4857C20 13.3658 20 13.8058 19.8287 14.142C19.6781 14.4377 19.4377 14.6781 19.142 14.8287C18.8058 15 18.3658 15 17.4857 15H15" stroke={props.stroke} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);


export const ArrowDownLeft1Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18 18L5 5M18.9999 11.0001L19 18C19 18.5523 18.5523 19 18 19H11" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowDownLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5.99999 18L19 5M5.00008 11.0001L5 18C4.99999 18.5523 5.44771 19 6 19H13" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)


export const ArrowDownIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 21.2072V2.20715M18 16.2072L12.7071 21.5C12.3166 21.8906 11.6834 21.8906 11.2929 21.5L6 16.2072" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)



export const ArrowLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2.79282 12L21.7928 12M7.79282 18L2.49992 12.7071C2.1094 12.3166 2.1094 11.6834 2.49992 11.2929L7.79282 6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowReload01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315M5.00001 21V17C5.00001 16.4477 5.44772 16 6.00001 16H10M19 3L19 7C19 7.55228 18.5523 8 18 8L14 8M17.6568 17.6569C14.5326 20.781 9.46729 20.781 6.3431 17.6569M4 12C4 7.58172 7.58172 3.99999 12 3.99999M20 12C20 16.4183 16.4182 20 12 20" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowReload02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.6569 6.34315C14.5327 3.21895 9.46734 3.21895 6.34314 6.34315M19 21V17C19 16.4477 18.5523 16 18 16H14M4.99999 3L4.99999 7C4.99999 7.55228 5.44771 8 5.99999 8L9.99999 8M6.34319 17.6569C9.46739 20.781 14.5327 20.781 17.6569 17.6569M20 12C20 7.58172 16.4183 3.99999 12 3.99999M4.00005 12C4.00005 16.4183 7.58177 20 12 20" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)


export const ArrowRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M21.207 12L2.20703 12M16.207 18L21.4999 12.7071C21.8904 12.3166 21.8904 11.6834 21.4999 11.2929L16.207 6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)


export const ArrowSubDownLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18 3L18 15C18 16.1046 17.1046 17 16 17L7 17M10 13L6.02929 16.9293C5.99024 16.9683 5.99024 17.0317 6.02929 17.0707L10 21" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubDownRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 3L6 15C6 16.1046 6.89543 17 8 17L17 17M14 13L17.9707 16.9293C18.0098 16.9683 18.0098 17.0317 17.9707 17.0707L14 21" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubLeftDown1Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M21 6H9C7.89543 6 7 6.89543 7 8V17M11 14L7.07071 17.9707C7.03166 18.0098 6.96834 18.0098 6.92929 17.9707L3 14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubLeftDownIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 6H15C16.1046 6 17 6.89543 17 8V17M13 14L16.9293 17.9707C16.9683 18.0098 17.0317 18.0098 17.0707 17.9707L21 14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubLeftUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M21 18H9C7.89543 18 7 17.1046 7 16V7M11 10L7.07071 6.02929C7.03166 5.99024 6.96834 5.99024 6.92929 6.02929L3 10" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubRightUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 18H15C16.1046 18 17 17.1046 17 16V7M13 10L16.9293 6.02929C16.9683 5.99024 17.0317 5.99024 17.0707 6.02929L21 10" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubUpLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18 21L18 9C18 7.89543 17.1046 7 16 7L7 7M10 11L6.02929 7.07071C5.99024 7.03166 5.99024 6.96834 6.02929 6.92929L10 3" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowSubUpRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 21L6 9C6 7.89543 6.89543 7 8 7L17 7M14 11L17.9707 7.07071C18.0098 7.03166 18.0098 6.96834 17.9707 6.92929L14 3" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowUndoDownLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.4227 4.5H14.8964C18.2101 4.5 20.8964 7.18629 20.8964 10.5C20.8964 13.8137 18.2101 16.5 14.8964 16.5H3.89641M5.89641 13.5L3.24996 16.1464C3.0547 16.3417 3.0547 16.6583 3.24996 16.8536L5.89641 19.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowUndoDownRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12.5773 4.5H9.10359C5.78988 4.5 3.10359 7.18629 3.10359 10.5C3.10359 13.8137 5.78988 16.5 9.10359 16.5H20.1036M18.1036 13.5L20.75 16.1464C20.9453 16.3417 20.9453 16.6583 20.75 16.8536L18.1036 19.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowUndoUpLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.4227 19.5H14.8964C18.2101 19.5 20.8964 16.8137 20.8964 13.5C20.8964 10.1863 18.2101 7.5 14.8964 7.5H3.89641M5.89641 10.5L3.24996 7.85355C3.0547 7.65829 3.0547 7.34171 3.24996 7.14645L5.89641 4.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowUndoUpRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12.5773 19.5H9.10359C5.78988 19.5 3.10359 16.8137 3.10359 13.5C3.10359 10.1863 5.78988 7.5 9.10359 7.5H20.1036M18.1036 10.5L20.75 7.85355C20.9453 7.65829 20.9453 7.34171 20.75 7.14645L18.1036 4.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)


export const ArrowUpLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5.99999 6L19 19M5.00008 12.9999L5 6.00001C4.99999 5.44772 5.44771 5 6 5L13 5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)


export const ArrowUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 2.79288V21.7929M18 7.79288L12.7071 2.49999C12.3166 2.10946 11.6834 2.10946 11.2929 2.49999L6 7.79288" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)



export const ArrowUpRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18 6L5 19M18.9999 12.9999L19 6.00001C19 5.44772 18.5523 5 18 5L11 5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)


export const ArrowCircleDownIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 13L11.4343 15.4343C11.6323 15.6323 11.7313 15.7313 11.8455 15.7684C11.8957 15.7847 11.9479 15.7929 12 15.7929M15 13L12.5657 15.4343C12.3677 15.6323 12.2687 15.7313 12.1545 15.7684C12.1043 15.7847 12.0521 15.7929 12 15.7929M12 15.7929V8.00011M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleDownLeft1Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.17157 10.5858L9.17157 14.0284C9.17157 14.3085 9.17157 14.4485 9.22607 14.5554C9.25004 14.6025 9.28115 14.6451 9.31802 14.682M13.4142 14.8284L9.97157 14.8284C9.69155 14.8284 9.55153 14.8284 9.44458 14.7739C9.39754 14.75 9.35489 14.7189 9.31802 14.682M9.31802 14.682L14.8283 9.17165M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleDownLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.8284 10.5858L14.8284 14.0284C14.8284 14.3085 14.8284 14.4485 14.7739 14.5554C14.75 14.6025 14.7189 14.6451 14.682 14.682M10.5858 14.8284L14.0284 14.8284C14.3085 14.8284 14.4485 14.8284 14.5554 14.7739C14.6025 14.75 14.6451 14.7189 14.682 14.682M14.682 14.682L9.17165 9.17165M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11 9L8.56568 11.4343C8.36768 11.6323 8.26867 11.7313 8.23158 11.8455C8.21526 11.8957 8.20711 11.9479 8.20711 12M11 15L8.56568 12.5657C8.36768 12.3677 8.26867 12.2687 8.23158 12.1545C8.21526 12.1043 8.20711 12.0521 8.20711 12M8.20711 12L15.9999 12M18.364 18.364C14.8492 21.8787 9.15075 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15075 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13 15L15.4343 12.5657C15.6323 12.3677 15.7313 12.2687 15.7684 12.1545C15.7847 12.1043 15.7929 12.0521 15.7929 12M13 9L15.4343 11.4343C15.6323 11.6323 15.7313 11.7313 15.7684 11.8455C15.7847 11.8957 15.7929 11.9479 15.7929 12M15.7929 12L8.00011 12M5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63604Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 11L12.5657 8.56568C12.3677 8.36768 12.2687 8.26867 12.1545 8.23158C12.1043 8.21526 12.0521 8.2071 12 8.2071M9 11L11.4343 8.56568C11.6323 8.36767 11.7313 8.26867 11.8455 8.23158C11.8957 8.21526 11.9479 8.2071 12 8.2071M12 8.2071L12 15.9999M5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15075 21.8787 5.63604 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleUpLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.17157 13.4142L9.17157 9.97157C9.17157 9.69154 9.17157 9.55153 9.22607 9.44458C9.25004 9.39753 9.28115 9.35489 9.31802 9.31802M13.4142 9.17157L9.97157 9.17157C9.69155 9.17157 9.55153 9.17157 9.44458 9.22607C9.39754 9.25004 9.35489 9.28114 9.31802 9.31802M9.31802 9.31802L14.8283 14.8283M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ArrowCircleUpRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.8284 13.4142L14.8284 9.97157C14.8284 9.69154 14.8284 9.55153 14.7739 9.44458C14.75 9.39753 14.7189 9.35489 14.682 9.31802M10.5858 9.17157L14.0284 9.17157C14.3085 9.17157 14.4485 9.17157 14.5554 9.22607C14.6025 9.25004 14.6451 9.28114 14.682 9.31802M14.682 9.31802L9.17165 14.8283M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BellIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.5 18.4C15.5 20.3882 13.933 22 12 22C10.067 22 8.5 20.3882 8.5 18.4M5 11.2V17.2C5 17.8627 5.52233 18.4 6.16667 18.4H17.8333C18.4777 18.4 19 17.8627 19 17.2V11.2C19 7.22355 15.866 4 12 4C8.13401 4 5 7.22355 5 11.2Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const BellCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.5 17.4C15.5 19.3882 13.933 21 12 21C10.067 21 8.5 19.3882 8.5 17.4M9 11L10.6464 12.6464C10.8417 12.8417 11.1583 12.8417 11.3536 12.6464L15 9M5 10.2V16.2C5 16.8627 5.52233 17.4 6.16667 17.4H17.8333C18.4777 17.4 19 16.8627 19 16.2V10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BellCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.5 17.4C15.5 19.3882 13.933 21 12 21C10.067 21 8.5 19.3882 8.5 17.4M12 11L14 9M12 11L14 13M12 11L10 13M12 11L10 9M5 10.2V16.2C5 16.8627 5.52233 17.4 6.16667 17.4H17.8333C18.4777 17.4 19 16.8627 19 16.2V10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BellMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.5 17.4C15.5 19.3882 13.933 21 12 21C10.067 21 8.5 19.3882 8.5 17.4M9 11H15M5 10.2V16.2C5 16.8627 5.52233 17.4 6.16667 17.4H17.8333C18.4777 17.4 19 16.8627 19 16.2V10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BellNotificationIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.5 18.4C14.5 20.3882 12.933 22 11 22C9.067 22 7.5 20.3882 7.5 18.4M12.4501 4.15469C12.1626 4.7068 12 5.33442 12 6C12 8.20914 13.7909 10 16 10C16.6548 10 17.2729 9.84266 17.8184 9.56371M12.4501 4.15469C12.576 3.91303 12.7259 3.68583 12.8965 3.47625C13.63 2.57541 14.7478 2 16 2C18.2091 2 20 3.79086 20 6C20 7.25222 19.4246 8.37005 18.5238 9.1035C18.3064 9.28045 18.0701 9.43502 17.8184 9.56371M12.4501 4.15469C11.9823 4.05332 11.4972 4 11 4C7.13401 4 4 7.22355 4 11.2V17.2C4 17.8627 4.52233 18.4 5.16667 18.4H16.8333C17.4777 18.4 18 17.8627 18 17.2V11.2C18 10.6372 17.9372 10.0894 17.8184 9.56371" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const BellOffIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8.1283 18.4H5.79496C5.15063 18.4 4.6283 17.8627 4.6283 17.2V11.2C4.6283 9.19667 5.42375 7.38443 6.70751 6.07921M8.1283 18.4H15.1283M8.1283 18.4C8.1283 20.3882 9.6953 22 11.6283 22C13.5613 22 15.1283 20.3882 15.1283 18.4M15.1283 18.4H17.4616C17.8822 18.4 18.2508 18.1711 18.4561 17.8278M3.5 2.87553L6.70751 6.07921M6.70751 6.07921L18.4561 17.8278M18.4561 17.8278L20.4998 19.9378M9.6283 4.29816C10.262 4.10417 10.9333 4 11.6283 4C15.4943 4 18.6283 7.22355 18.6283 11.2V13.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BellPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.5 17.4C15.5 19.3882 13.933 21 12 21C10.067 21 8.5 19.3882 8.5 17.4M9 11H15M12 8L12 14M5 10.2V16.2C5 16.8627 5.52233 17.4 6.16667 17.4H17.8333C18.4777 17.4 19 16.8627 19 16.2V10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BellRingIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.4997 18.4C15.4997 20.3882 13.9327 22 11.9997 22C10.0667 22 8.49968 20.3882 8.49968 18.4M7 2L3 6M16.9997 2L20.9997 6M4.99968 11.2V17.2C4.99968 17.8627 5.52202 18.4 6.16635 18.4H17.833C18.4773 18.4 18.9997 17.8627 18.9997 17.2V11.2C18.9997 7.22355 15.8657 4 11.9997 4C8.13369 4 4.99968 7.22355 4.99968 11.2Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const BookmarkIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 4.38666H8C6.89543 4.38666 6 5.28209 6 6.38666V17.6118C6 18.9769 7.33739 19.9409 8.63246 19.5092L11.3675 18.5975C11.7781 18.4606 12.2219 18.4606 12.6325 18.5975L15.3675 19.5092C16.6626 19.9409 18 18.9769 18 17.6118V6.38666C18 5.28209 17.1046 4.38666 16 4.38666Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Calendar01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 9V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M12 3V5M7 3V5M17 3V5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Calendar02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 9V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M12 3V5M7 3V5M17 3V5M8.39343 14V16C8.39343 16.5523 8.84115 17 9.39343 17H11.3934C11.9457 17 12.3934 16.5523 12.3934 16V14C12.3934 13.4477 11.9457 13 11.3934 13H9.39343C8.84115 13 8.39343 13.4477 8.39343 14Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CalendarCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 9V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M12 3V5M7 3V5M17 3V5M15 13.5L11.352 16.692C11.1539 16.8653 10.8554 16.8554 10.6692 16.6692L9 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CalendarCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 5H18C19.1046 5 20 5.89543 20 7V9M17 5H12M17 5V3M12 5H7M12 5V3M7 5H6C4.89543 5 4 5.89543 4 7V9M7 5V3M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M10 13L12 15M12 15L14 17M12 15L10 17M12 15L14 13" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CalendarDocumentIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 9V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M12 3V5M7 3V5M17 3V5M9 17H15M9 13H15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CalendarDotsIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 5H18C19.1046 5 20 5.89543 20 7V9M17 5H12M17 5V3M12 5H7M12 5V3M7 5H6C4.89543 5 4 5.89543 4 7V9M7 5V3M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M8 13V13.01H8.01V13H8ZM12.002 13V13.01H12.012V13H12.002ZM16.0039 13V13.01H16.0139V13H16.0039ZM8 17V17.01H8.01V17H8ZM12.002 17V17.01H12.012V17H12.002ZM16.0039 17V17.01H16.0139V17H16.0039Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const CalendarMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 9V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M12 3V5M7 3V5M17 3V5M9 15H15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CalendarPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 5H18C19.1046 5 20 5.89543 20 7V9M17 5H12M17 5V3M12 5H7M12 5V3M7 5H6C4.89543 5 4 5.89543 4 7V9M7 5V3M4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V9M4 9H20M12 12V18M15 15H9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretCircleDownIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 11L11.6464 13.6464C11.8417 13.8417 12.1583 13.8417 12.3536 13.6464L15 11M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretCircleLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13 9L10.3536 11.6464C10.1583 11.8417 10.1583 12.1583 10.3536 12.3536L13 15M5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretCircleRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11 9L13.6464 11.6464C13.8417 11.8417 13.8417 12.1583 13.6464 12.3536L11 15M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretCircleUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 13L12.3536 10.3536C12.1583 10.1583 11.8417 10.1583 11.6464 10.3536L9 13M5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretDoubleDownIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 7.60355L11.6464 10.25C11.8417 10.4453 12.1583 10.4453 12.3536 10.25L15 7.60355M9 13.6035L11.6464 16.25C11.8417 16.4453 12.1583 16.4453 12.3536 16.25L15 13.6035" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretDoubleLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16.3964 15L13.75 12.3536C13.5547 12.1583 13.5547 11.8417 13.75 11.6464L16.3964 9M10.3964 15L7.74996 12.3536C7.5547 12.1583 7.5547 11.8417 7.74996 11.6464L10.3964 9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretDoubleRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7.60352 15L10.25 12.3536C10.4452 12.1583 10.4452 11.8417 10.25 11.6464L7.60352 9M13.6035 15L16.25 12.3536C16.4452 12.1583 16.4452 11.8417 16.25 11.6464L13.6035 9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CaretDoubleUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 16.3964L12.3536 13.75C12.1583 13.5547 11.8417 13.5547 11.6464 13.75L9 16.3964M15 10.3964L12.3536 7.74999C12.1583 7.55473 11.8417 7.55473 11.6464 7.74999L9 10.3964" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)





export const CaretLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 17L10.0293 12.0884C9.99024 12.0396 9.99024 11.9604 10.0293 11.9116L14 7" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)




export const CaretRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10 17L13.9707 12.0884C14.0098 12.0396 14.0098 11.9604 13.9707 11.9116L10 7" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)




export const CaretUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 14L12.0884 10.0293C12.0396 9.99024 11.9604 9.99024 11.9116 10.0293L7 14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)



export const ChatIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.3351 3.29069 14.6022 3.81223 15.7416C3.8901 15.9118 3.92596 16.0987 3.90794 16.285L3.61698 19.2913C3.55636 19.9177 4.08235 20.4436 4.70866 20.383L7.71503 20.0921C7.90127 20.074 8.08824 20.1099 8.25837 20.1878C9.39779 20.7093 10.6649 21 12 21Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const ChatCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8.99233 12.3789L10.6388 14.0254C10.834 14.2206 11.1506 14.2206 11.3459 14.0254L14.9923 10.3789M20.9998 12C20.9998 16.9706 16.9704 21 11.9998 21C10.6647 21 9.39758 20.7093 8.25816 20.1878C8.08803 20.1099 7.90106 20.074 7.71482 20.0921L4.70845 20.383C4.08213 20.4436 3.55615 19.9177 3.61677 19.2913L3.90773 16.285C3.92575 16.0987 3.88989 15.9118 3.81201 15.7416C3.29048 14.6022 2.99979 13.3351 2.99979 12C2.99979 7.02944 7.02923 3 11.9998 3C16.9704 3 20.9998 7.02944 20.9998 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ChatCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 12L14 14M12 12L10 14M12 12L14 10M12 12L10 10M21 12C21 16.9706 16.9706 21 12 21C10.6649 21 9.39779 20.7093 8.25837 20.1878C8.08824 20.1099 7.90127 20.074 7.71503 20.0921L4.70866 20.383C4.08235 20.4436 3.55636 19.9177 3.61698 19.2913L3.90794 16.285C3.92596 16.0987 3.8901 15.9118 3.81223 15.7416C3.29069 14.6022 3 13.3351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ChatCloseSquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 11L14 9M12 11L14 13M12 11L10 13M12 11L10 9M4 3.95946H20C20.5523 3.95946 21 4.40717 21 4.95946V16.9595C21 17.5117 20.5523 17.9595 20 17.9595H8.31522C8.11005 17.9595 7.90984 18.0226 7.74176 18.1402L4.57346 19.858C3.91069 20.322 3 19.8478 3 19.0388V4.95946C3 4.40717 3.44772 3.95946 4 3.95946Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ChatDotsIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8 12H8.01562M12 12H12.0156M16 12H16.0156M21 12C21 16.9706 16.9706 21 12 21C10.6649 21 9.39779 20.7093 8.25837 20.1878C8.08824 20.1099 7.90127 20.074 7.71503 20.0921L4.70866 20.383C4.08235 20.4436 3.55636 19.9177 3.61698 19.2913L3.90794 16.285C3.92596 16.0987 3.8901 15.9118 3.81223 15.7416C3.29069 14.6022 3 13.3351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ChatDotsSquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8 10.9595H8.01562M12 10.9595H12.0156M16 10.9595H16.0156M4 3.95947H20C20.5523 3.95947 21 4.40719 21 4.95947V16.9595C21 17.5118 20.5523 17.9595 20 17.9595H8.31522C8.11005 17.9595 7.90984 18.0226 7.74176 18.1402L4.57346 19.858C3.91069 20.322 3 19.8478 3 19.0388V4.95947C3 4.40719 3.44772 3.95947 4 3.95947Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ChatHelpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12.0002 17H12.0158M9.00021 10C9.00021 8.34315 10.3434 7 12.0002 7C13.6571 7 15.0002 8.34315 15.0002 10C15.0002 11.1235 14.3826 11.8728 13.4685 12.2388C12.6994 12.5468 12.0002 13.1716 12.0002 14M21 12C21 16.9706 16.9706 21 12 21C10.6649 21 9.39779 20.7093 8.25837 20.1878C8.08824 20.1099 7.90127 20.074 7.71503 20.0921L4.70866 20.383C4.08235 20.4436 3.55636 19.9177 3.61698 19.2913L3.90794 16.285C3.92596 16.0987 3.8901 15.9118 3.81223 15.7416C3.29069 14.6022 3 13.3351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ChatMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 12H12H9M21 12C21 16.9706 16.9706 21 12 21C10.6649 21 9.39779 20.7093 8.25837 20.1878C8.08824 20.1099 7.90127 20.074 7.71503 20.0921L4.70866 20.383C4.08235 20.4436 3.55636 19.9177 3.61698 19.2913L3.90794 16.285C3.92596 16.0987 3.8901 15.9118 3.81223 15.7416C3.29069 14.6022 3 13.3351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ChatMinusSquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 10.9595H15M4 3.95946H20C20.5523 3.95946 21 4.40717 21 4.95946V16.9595C21 17.5117 20.5523 17.9595 20 17.9595H8.31522C8.11005 17.9595 7.90984 18.0226 7.74176 18.1402L4.57346 19.858C3.91069 20.322 3 19.8478 3 19.0388V4.95946C3 4.40717 3.44772 3.95946 4 3.95946Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ChatNotificationIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.3965 3.97625C13.836 4.66465 13.5 5.54308 13.5 6.5C13.5 8.70914 15.2909 10.5 17.5 10.5C18.4569 10.5 19.3354 10.164 20.0238 9.6035M14.3965 3.97625C15.13 3.07541 16.2478 2.5 17.5 2.5C19.7091 2.5 21.5 4.29086 21.5 6.5C21.5 7.75222 20.9246 8.87005 20.0238 9.6035M14.3965 3.97625C13.4876 3.66747 12.5133 3.5 11.5 3.5C6.52944 3.5 2.5 7.52944 2.5 12.5C2.5 13.8351 2.79069 15.1022 3.31223 16.2416C3.3901 16.4118 3.42596 16.5987 3.40794 16.785L3.11698 19.7913C3.05636 20.4177 3.58235 20.9436 4.20866 20.883L7.21503 20.5921C7.40127 20.574 7.58824 20.6099 7.75837 20.6878C8.89779 21.2093 10.1649 21.5 11.5 21.5C16.4706 21.5 20.5 17.4706 20.5 12.5C20.5 11.4867 20.3325 10.5124 20.0238 9.6035" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const ChatPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.00021 12H12.0002M12.0002 12H15.0002M12.0002 12V9M12.0002 12V15M21 12C21 16.9706 16.9706 21 12 21C10.6649 21 9.39779 20.7093 8.25837 20.1878C8.08824 20.1099 7.90127 20.074 7.71503 20.0921L4.70866 20.383C4.08235 20.4436 3.55636 19.9177 3.61698 19.2913L3.90794 16.285C3.92596 16.0987 3.8901 15.9118 3.81223 15.7416C3.29069 14.6022 3 13.3351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ChatPlusSquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 11V13M12 11H15M12 11V8M12 11H9M12 11V14M4 3.95946H20C20.5523 3.95946 21 4.40717 21 4.95946V16.9595C21 17.5117 20.5523 17.9595 20 17.9595H8.31522C8.11005 17.9595 7.90984 18.0226 7.74176 18.1402L4.57346 19.858C3.91069 20.322 3 19.8478 3 19.0388V4.95946C3 4.40717 3.44772 3.95946 4 3.95946Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ChatSquereIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M20 3.95946H4C3.44772 3.95946 3 4.40717 3 4.95946V19.0388C3 19.8478 3.91069 20.322 4.57346 19.858L7.74176 18.1402C7.90984 18.0226 8.11005 17.9595 8.31522 17.9595H20C20.5523 17.9595 21 17.5117 21 16.9595V4.95946C21 4.40717 20.5523 3.95946 20 3.95946Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ChatWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 17H12.0156M12 14V7M21 12C21 16.9706 16.9706 21 12 21C10.6649 21 9.39779 20.7093 8.25837 20.1878C8.08824 20.1099 7.90127 20.074 7.71503 20.0921L4.70866 20.383C4.08235 20.4436 3.55636 19.9177 3.61698 19.2913L3.90794 16.285C3.92596 16.0987 3.8901 15.9118 3.81223 15.7416C3.29069 14.6022 3 13.3351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const CheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 12L9.64645 15.6464C9.84171 15.8417 10.1583 15.8417 10.3536 15.6464L18 8" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Check01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V12.8C8 13.9201 8 14.4802 8.21799 14.908C8.40973 15.2843 8.71569 15.5903 9.09202 15.782C9.51984 16 10.0799 16 11.2 16H12.8C13.9201 16 14.4802 16 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C16 14.4802 16 13.9201 16 12.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const Check02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.8284 9.17157C16.3905 10.7337 16.3905 13.2663 14.8284 14.8284C13.2663 16.3905 10.7337 16.3905 9.17157 14.8284C7.60948 13.2663 7.60948 10.7337 9.17157 9.17157C10.7337 7.60948 13.2663 7.60948 14.8284 9.17157Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CheckAllIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.5 12.1036L7.14645 15.75M15.5 8.10358L12.75 10.8536M8.5 12.1036L10 13.6036L12.1464 15.75C12.3417 15.9453 12.6583 15.9453 12.8536 15.75L20.5 8.10358" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CheckAllBigIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2.5 13.1036L6.14645 16.75M16.5 7.10358L11.75 11.8536M7.5 13.1036L9 14.6036L11.1464 16.75C11.3417 16.9453 11.6583 16.9453 11.8536 16.75L21.5 7.10358" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CheckBigIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 13.1545L8.64645 16.801C8.84171 16.9963 9.65829 16.4963 9.85355 16.301L19 7.15454" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CheckSquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.35355 11.3536L11 13C11.1953 13.1953 11.5118 13.1953 11.7071 13L15.3536 9.35355M4 3.95946H20C20.5523 3.95946 21 4.40717 21 4.95946V16.9595C21 17.5117 20.5523 17.9595 20 17.9595H8.31522C8.11005 17.9595 7.90984 18.0226 7.74176 18.1402L4.57346 19.858C3.91069 20.322 3 19.8478 3 19.0388V4.95946C3 4.40717 3.44772 3.95946 4 3.95946Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CheckboxChekedIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.4 8H9.6C9.03995 8 8.75992 8 8.54601 8.10899C8.35785 8.20487 8.20487 8.35785 8.10899 8.54601C8 8.75992 8 9.03995 8 9.6V14.4C8 14.9601 8 15.2401 8.10899 15.454C8.20487 15.6422 8.35785 15.7951 8.54601 15.891C8.75992 16 9.03995 16 9.6 16H14.4C14.9601 16 15.2401 16 15.454 15.891C15.6422 15.7951 15.7951 15.6422 15.891 15.454C16 15.2401 16 14.9601 16 14.4V9.6C16 9.03995 16 8.75992 15.891 8.54601C15.7951 8.35785 15.6422 8.20487 15.454 8.10899C15.2401 8 14.9601 8 14.4 8Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
    <path d="M16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const CheckboxUnchekedIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const ChromecastIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7M3 16C4.65685 16 6 17.3431 6 19M3 13C6.31371 13 9 15.6863 9 19M3 10C7.97056 10 12 14.0294 12 19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CircleIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CircleHelpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.12679 21.8547 14.7716 21.8785 18.2918 18.4354M9.27246 10.2721C9.27246 8.61522 10.6156 7.27208 12.2725 7.27208C13.9293 7.27208 15.2725 8.61522 15.2725 10.2721C15.2725 11.3956 14.6549 12.1449 13.7407 12.5109C12.9717 12.8189 12.2725 13.4437 12.2725 14.2721M12.2725 17.2721V17.2821H12.2825V17.2721H12.2725Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const CircleWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7V14M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364ZM12 17V17.01H12.01V17H12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const Clock01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7V11.5858C12 11.851 12.1054 12.1054 12.2929 12.2929L15 15M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Clock02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M20.0001 3L22.0001 5M4 2.75L2 4.75M11.8789 7.25V11.8358C11.8789 12.101 11.9842 12.3554 12.1718 12.5429L14.8789 15.25M18.2429 18.614C21.7576 15.0992 21.7576 9.40076 18.2429 5.88604C14.7281 2.37132 9.02965 2.37132 5.51493 5.88604C2.00021 9.40076 2.00021 15.0992 5.51493 18.614C9.02965 22.1287 14.7281 22.1287 18.2429 18.614Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Close01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8 8L16 16M8 16L16 8" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Close02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 6L18 18M6 18L18 6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Close03Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 4L20 20M4 20L20 4" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.75992 5.55988C9.97777 4.60655 11.5523 4 13 4H13.8033C16.9771 4 19.6112 6.53507 19.9437 9.81656H20.1799C22.8282 9.81656 25 12.0816 25 14.9083C25 17.735 22.8282 20 20.1799 20H6.37238C3.41908 20 1 17.4746 1 14.3266C1 11.1787 3.41908 8.65324 6.37238 8.65324H6.64361C6.9493 7.37415 7.79879 6.31225 8.75992 5.55988Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const CloudCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 12L12.5657 15.4343C12.3677 15.6323 12.2687 15.7313 12.1545 15.7684C12.0541 15.8011 11.9459 15.8011 11.8455 15.7684C11.7314 15.7313 11.6323 15.6323 11.4343 15.4343L10 14M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 11L13 13M13 13L11 15M13 13L15 15M13 13L11 11M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudCodeIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11 12L9.56569 13.4343C9.36768 13.6323 9.26867 13.7313 9.23158 13.8455C9.19895 13.9459 9.19895 14.0541 9.23158 14.1545C9.26867 14.2687 9.36768 14.3677 9.56569 14.5657L11 16M15 12L16.4343 13.4343C16.6323 13.6323 16.7313 13.7313 16.7684 13.8455C16.8011 13.9459 16.8011 14.0541 16.7684 14.1545C16.7313 14.2687 16.6323 14.3677 16.4343 14.5657L15 16M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudDocumentIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 12L10 12M16 16H10M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudDownloadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11 14L12.6608 15.75C12.6785 15.7686 12.6873 15.7779 12.7106 15.7971C12.7221 15.8066 12.7637 15.8357 12.7766 15.8433V15.8433C12.7766 15.8433 12.8282 15.8687 12.8282 15.8687C12.8836 15.8889 12.9418 15.8991 13 15.8991M15 14L13.3392 15.75C13.3215 15.7686 13.3127 15.7779 13.2894 15.7971C13.2779 15.8066 13.2363 15.8357 13.2234 15.8433V15.8433C13.2234 15.8433 13.1718 15.8687 13.1718 15.8687C13.1164 15.8889 13.0582 15.8991 13 15.8991M13 15.8991V10M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 13H10M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudOffIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 2.5L8.12336 5.62336M24 21.5L21.7304 19.2304M21.7304 19.2304C21.2432 19.4053 20.7215 19.5 20.1799 19.5H6.37238C3.41908 19.5 1 16.9746 1 13.8266C1 10.6787 3.41908 8.15324 6.37238 8.15324H6.64361C6.87941 7.16659 7.43878 6.30917 8.12336 5.62336M21.7304 19.2304L8.12336 5.62336M11 3.84907C11.6627 3.6244 12.3444 3.5 13 3.5H13.8033C16.9771 3.5 19.6112 6.03507 19.9437 9.31656H20.1799C22.8282 9.31656 25 11.5816 25 14.4083C25 15.3758 24.7455 16.2776 24.3046 17.0452" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13 10V13M13 13V16M13 13H16M13 13H10M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudSearchIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.2781 14.2573C14.7245 13.8058 15 13.1851 15 12.5C15 11.1193 13.8807 10 12.5 10C11.1193 10 10 11.1193 10 12.5C10 13.8807 11.1193 15 12.5 15C13.1957 15 13.8249 14.7159 14.2781 14.2573ZM14.2781 14.2573L16 16M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CloudUploadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 12L13.3392 10.25C13.3215 10.2314 13.3127 10.2221 13.2894 10.2029C13.2779 10.1934 13.2363 10.1643 13.2234 10.1567V10.1567C13.2234 10.1567 13.1718 10.1313 13.1718 10.1313C13.1164 10.1111 13.0582 10.1009 13 10.1009M11 12L12.6608 10.25C12.6785 10.2314 12.6873 10.2221 12.7106 10.2029C12.7221 10.1934 12.7637 10.1643 12.7766 10.1567V10.1567C12.7766 10.1567 12.8282 10.1313 12.8282 10.1313C12.8836 10.1111 12.9418 10.1009 13 10.1009M13 10.1009V16M13 4C11.5523 4 9.97777 4.60655 8.75992 5.55988C7.79879 6.31225 6.9493 7.37415 6.64361 8.65324H6.37238C3.41908 8.65324 1 11.1787 1 14.3266C1 17.4746 3.41908 20 6.37238 20H20.1799C22.8282 20 25 17.735 25 14.9083C25 12.0816 22.8282 9.81656 20.1799 9.81656H19.9437C19.6112 6.53507 16.9771 4 13.8033 4H13Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CommandIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10 10H7C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7V10ZM10 10H14M10 10V14M14 10H17C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7V10ZM14 10V14M10 14H7C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17V14ZM10 14H14M14 14H17C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17V14Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CreditCartIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 11V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V11M3 11H21M3 11V9M21 11V9M21 9V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V9M21 9H3M7 15H11" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const CropIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 3V17.5C6 17.7761 6.22386 18 6.5 18H21M10 6H17.5C17.7761 6 18 6.22386 18 6.5V14M6 6H3M18 21V18" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const DownoadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 11.7845L12.7623 16.3343C12.552 16.5446 12.2757 16.6486 12 16.6463M7 11.7845L11.2552 16.3343C11.4611 16.5401 11.7302 16.6441 12 16.6463M12 16.6463L12 3.78454M4 20.2155L20 20.2155" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Edit01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.1213 7.05026L5.636 15.5355V18.364H8.46443L16.9497 9.87869M14.1213 7.05026L16.9497 4.22183L19.7781 7.05026L16.9497 9.87869M14.1213 7.05026L16.9497 9.87869" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const Edit02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8.46443 18.364L19.7781 7.05026L16.9497 4.22183L5.636 15.5355V18.364H8.46443Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const EditLine01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7.75738 19.0711H4.92896V16.2426L13.4142 7.75735M7.75738 19.0711L16.2427 10.5858M7.75738 19.0711H19.0711M13.4142 7.75735L16.2427 4.92892L19.0711 7.75735L16.2427 10.5858M13.4142 7.75735L16.2427 10.5858" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const EditLine02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7.75738 19.0711L19.0711 7.75735L16.2427 4.92892L4.92896 16.2426V19.0711H7.75738ZM7.75738 19.0711H19.0711" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ExitIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5.5 16V18C5.5 19.1046 6.39543 20 7.5 20H19.5C20.6046 20 21.5 19.1046 21.5 18V6C21.5 4.89543 20.6046 4 19.5 4H7.5C6.39543 4 5.5 4.89543 5.5 6V8M2.5 12H17.5M17.5 12L14.5 9M17.5 12L14.5 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const Exit02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7.5 16V18C7.5 19.1046 8.39543 20 9.5 20H17.5C18.6046 20 19.5 19.1046 19.5 18V6C19.5 4.89543 18.6046 4 17.5 4H9.5C8.39543 4 7.5 4.89543 7.5 6V8M4.5 12H15.5M15.5 12L12.5 9M15.5 12L12.5 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ExpandIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16.2424 12V8.25732C16.2424 7.98118 16.0185 7.75732 15.7424 7.75732H11.9997M7.75709 12L7.7571 15.7426C7.7571 16.0187 7.98095 16.2426 8.2571 16.2426L11.9997 16.2426" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ExternalLinkIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11 6H5.75C4.7835 6 4 6.7835 4 7.75V18.25C4 19.2165 4.7835 20 5.75 20H16.25C17.2165 20 18 19.2165 18 18.25V13M11 13L20 4M20 4H15M20 4V9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const FileIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 2.60387V8.69992C14 8.97995 14 9.11996 14.0545 9.22692C14.1024 9.321 14.1789 9.39749 14.273 9.44543C14.38 9.49992 14.52 9.49992 14.8 9.49992H20M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60452 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84341 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20201 19.9758 9.29787C20 9.40595 20 9.51992 20 9.74787V19.5C20 20.6046 18.9767 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const FileCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.9984 2.60385V8.69991C13.9984 8.97993 13.9984 9.11995 14.0529 9.2269C14.1009 9.32098 14.1773 9.39748 14.2714 9.44541C14.3784 9.49991 14.5184 9.49991 14.7984 9.49991H19.9984M14.7984 13.5L11.3641 16.9343C11.1661 17.1323 11.0671 17.2313 10.9529 17.2684C10.8525 17.3011 10.7443 17.3011 10.6439 17.2684C10.5297 17.2313 10.4307 17.1323 10.2327 16.9343L8.79839 15.5M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60452 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40595 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.9984 2.60385V8.69991C13.9984 8.97993 13.9984 9.11995 14.0529 9.2269C14.1009 9.32098 14.1773 9.39748 14.2714 9.44541C14.3784 9.49991 14.5184 9.49991 14.7984 9.49991H19.9984M12 14.5L13.9984 12.5M12 14.5L14.0529 16.5M12 14.5L10 16.5M12 14.5L10 12.5M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60452 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40595 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileDocumentIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.4984 2.5V8.59605C13.4984 8.87608 13.4984 9.01609 13.5529 9.12305C13.6009 9.21713 13.6773 9.29362 13.7714 9.34156C13.8784 9.39606 14.0184 9.39606 14.2984 9.39606H19.4984M9 13.5H14.4764M9 17.5H14.4764M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60453 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40596 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileDownloadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.4984 2.50092C13.439 2.5 13.3707 2.5 13.2899 2.5H6.28571C5.02335 2.5 4 3.39543 4 4.49999V19.5C4 20.6046 5.02335 21.5 6.28571 21.5H17.7143C18.9766 21.5 20 20.6046 20 19.5V9.74787C20 9.51993 20 9.40596 19.9758 9.29787C19.9543 9.20202 19.9188 9.10985 19.8704 9.02435C19.8159 8.92795 19.7394 8.8434 19.5864 8.6744L14.4764 3.02653C14.301 2.83263 14.2132 2.73568 14.1082 2.66615C14.0151 2.60453 13.9124 2.55892 13.8042 2.53124C13.7199 2.50965 13.6314 2.50298 13.4984 2.50092ZM13.4984 2.50092V8.59605C13.4984 8.87608 13.4984 9.01609 13.5529 9.12305C13.6009 9.21713 13.6773 9.29362 13.7714 9.34156C13.8784 9.39606 14.0184 9.39606 14.2984 9.39606H19.4984M10 15.5L11.6608 17.25C11.6785 17.2686 11.6873 17.2779 11.7106 17.2971C11.7221 17.3066 11.7637 17.3357 11.7766 17.3433L11.8282 17.3687C11.8836 17.3889 11.9418 17.3991 12 17.3991M14 15.5L12.3392 17.25C12.3215 17.2686 12.3127 17.2779 12.2894 17.2971C12.2779 17.3066 12.2363 17.3357 12.2234 17.3433L12.1718 17.3687C12.1164 17.3889 12.0582 17.3991 12 17.3991M12 17.3991V11.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileEdit1Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.2487 1.75V7.84605C14.2487 8.12608 14.2487 8.26609 14.3032 8.37305C14.3511 8.46713 14.4276 8.54362 14.5217 8.59156C14.6286 8.64606 14.7687 8.64606 15.0487 8.64606H20.2487M4.75026 13.75V3.74999C4.75026 2.64543 5.77361 1.75 7.03598 1.75H14.0402C14.3017 1.75 14.4324 1.75 14.5545 1.78124C14.6626 1.80892 14.7654 1.85453 14.8585 1.91615C14.9635 1.98568 15.0512 2.08263 15.2267 2.27653L20.3367 7.9244C20.4896 8.09342 20.5661 8.17794 20.6207 8.27435C20.669 8.35985 20.7045 8.45202 20.726 8.54787C20.7503 8.65596 20.7503 8.76993 20.7503 8.99787V18.75C20.7503 19.8546 19.7269 20.75 18.4645 20.75H11.7503M9.26777 13.7322L11.1843 11.8157C11.3823 11.6177 11.4813 11.5187 11.5955 11.4816C11.6959 11.4489 11.8041 11.4489 11.9045 11.4816C12.0187 11.5187 12.1177 11.6177 12.3157 11.8157L13.6843 13.1843C13.8823 13.3823 13.9813 13.4813 14.0184 13.5955C14.0511 13.6959 14.0511 13.8041 14.0184 13.9045C13.9813 14.0187 13.8823 14.1177 13.6843 14.3157L11.7678 16.2322M9.26777 13.7322L3.48431 19.5157C3.39784 19.6022 3.3546 19.6454 3.32368 19.6959C3.29627 19.7406 3.27606 19.7894 3.26381 19.8404C3.25 19.8979 3.25 19.9591 3.25 20.0814V21.45C3.25 21.73 3.25 21.87 3.3045 21.977C3.35243 22.0711 3.42892 22.1476 3.523 22.1955C3.62996 22.25 3.76997 22.25 4.05 22.25H5.41863C5.54092 22.25 5.60207 22.25 5.65962 22.2362C5.71063 22.2239 5.75941 22.2037 5.80414 22.1763C5.8546 22.1454 5.89784 22.1022 5.98431 22.0157L11.7678 16.2322M9.26777 13.7322L11.7678 16.2322" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileEditIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.38202 13.9822L11.2986 12.0657C11.4966 11.8677 11.5956 11.7687 11.7097 11.7316C11.8102 11.6989 11.9183 11.6989 12.0188 11.7316C12.1329 11.7687 12.2319 11.8677 12.4299 12.0657L13.7986 13.4343C13.9966 13.6323 14.0956 13.7313 14.1327 13.8455C14.1653 13.9459 14.1653 14.0541 14.1327 14.1545C14.0956 14.2687 13.9966 14.3677 13.7986 14.5657L11.882 16.4822M9.38202 13.9822L3.59857 19.7657C3.5121 19.8522 3.46886 19.8954 3.43794 19.9459C3.41052 19.9906 3.39032 20.0394 3.37807 20.0904C3.36426 20.1479 3.36426 20.2091 3.36426 20.3314V21.7C3.36426 21.98 3.36426 22.12 3.41875 22.227C3.46669 22.3211 3.54318 22.3976 3.63726 22.4455C3.74422 22.5 3.88423 22.5 4.16426 22.5H5.53289C5.65518 22.5 5.71633 22.5 5.77387 22.4862C5.82489 22.4739 5.87366 22.4537 5.9184 22.4263C5.96886 22.3954 6.0121 22.3522 6.09857 22.2657L11.882 16.4822M9.38202 13.9822L11.882 16.4822M20.6342 8.49992C20.6364 8.56611 20.6364 8.64549 20.6364 8.74787V18.5C20.6364 19.6046 19.613 20.5 18.3506 20.5H13.6364M20.6342 8.49992C20.6315 8.41874 20.6255 8.35741 20.6121 8.29787C20.5906 8.20201 20.5551 8.10985 20.5067 8.02435C20.4522 7.92794 20.3757 7.84341 20.2228 7.6744L15.1127 2.02653C14.9373 1.83263 14.8496 1.73568 14.7446 1.66615C14.7098 1.64312 14.6736 1.62232 14.6364 1.60387M20.6342 8.49992H15.4364C15.1563 8.49992 15.0163 8.49992 14.9094 8.44543C14.8153 8.39749 14.7388 8.321 14.6908 8.22692C14.6364 8.11996 14.6364 7.97995 14.6364 7.69992V1.60387M20.6342 8.49992H20.6364M14.6364 1.60387C14.5739 1.57294 14.5083 1.54858 14.4406 1.53124C14.3185 1.5 14.1878 1.5 13.9263 1.5H6.92207C5.6597 1.5 4.63635 2.39543 4.63635 3.49999V13.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.9984 2.60385V8.69991C13.9984 8.97993 13.9984 9.11995 14.0529 9.2269C14.1009 9.32098 14.1773 9.39748 14.2714 9.44541C14.3784 9.49991 14.5184 9.49991 14.7984 9.49991H19.9984M14.7984 14.5001H11.7984H8.79842M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60452 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40595 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FilePlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.9984 2.60385V8.69991C13.9984 8.97993 13.9984 9.11995 14.0529 9.2269C14.1009 9.32098 14.1773 9.39748 14.2714 9.44541C14.3784 9.49991 14.5184 9.49991 14.7984 9.49991H19.9984M11.7984 14.5001V17.5001M11.7984 14.5001H14.7984M11.7984 14.5001V11.5001M11.7984 14.5001H8.79842M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60452 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40595 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileSearchIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.4984 2.5V8.59605C13.4984 8.87608 13.4984 9.01609 13.5529 9.12305C13.6009 9.21713 13.6773 9.29362 13.7714 9.34156C13.8784 9.39606 14.0184 9.39606 14.2984 9.39606H19.4984M13.3864 16.2573C13.8327 15.8058 14.1082 15.1851 14.1082 14.5C14.1082 13.1193 12.9889 12 11.6082 12C10.2275 12 9.1082 13.1193 9.1082 14.5C9.1082 15.8807 10.2275 17 11.6082 17C12.3039 17 12.9331 16.7159 13.3864 16.2573ZM13.3864 16.2573L15.1082 18M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60453 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40596 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FileUploadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M13.4984 2.5V8.59605C13.4984 8.87608 13.4984 9.01609 13.5529 9.12305C13.6009 9.21713 13.6773 9.29362 13.7714 9.34156C13.8784 9.39606 14.0184 9.39606 14.2984 9.39606H19.4984M14.1082 13.5L12.4474 11.75C12.4297 11.7314 12.4209 11.7221 12.3976 11.7029C12.3861 11.6934 12.3445 11.6643 12.3316 11.6567L12.28 11.6313C12.2246 11.6111 12.1664 11.6009 12.1082 11.6009M10.1082 13.5L11.769 11.75C11.7867 11.7314 11.7955 11.7221 11.8188 11.7029C11.8303 11.6934 11.8719 11.6643 11.8848 11.6567L11.9364 11.6313C11.9918 11.6111 12.05 11.6009 12.1082 11.6009M12.1082 11.6009V17.5M17.7143 21.5H6.28571C5.02335 21.5 4 20.6046 4 19.5V4.49999C4 3.39543 5.02335 2.5 6.28571 2.5H13.2899C13.5514 2.5 13.6822 2.5 13.8042 2.53124C13.9124 2.55892 14.0151 2.60453 14.1082 2.66615C14.2132 2.73568 14.301 2.83263 14.4764 3.02653L19.5864 8.6744C19.7394 8.84342 19.8158 8.92794 19.8704 9.02435C19.9188 9.10985 19.9543 9.20202 19.9758 9.29787C20 9.40596 20 9.51993 20 9.74787V19.5C20 20.6046 18.9766 21.5 17.7143 21.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FilterIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19 6.29239V4.9995C19 4.72336 18.7761 4.4995 18.5 4.4995H5.5C5.22386 4.4995 5 4.72336 5 4.9995V6.29239C5 6.425 5.05268 6.55218 5.14645 6.64594L9.85355 11.3531C9.94732 11.4468 10 11.574 10 11.7066V18.9995C10 19.445 10.5386 19.668 10.8536 19.3531L13.8536 16.6459C13.9473 16.5522 14 16.425 14 16.2924V11.7066C14 11.574 14.0527 11.4468 14.1464 11.3531L18.8536 6.64595C18.9473 6.55218 19 6.425 19 6.29239Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FilterOffIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19 16.4995L15 12.4995M5 2.4995L9 6.4995M9 6.4995H5.5C5.22386 6.4995 5 6.72336 5 6.9995V8.29239C5 8.425 5.05268 8.55218 5.14645 8.64594L9.85355 13.3531C9.94732 13.4468 10 13.574 10 13.7066V20.9995C10 21.445 10.5386 21.668 10.8536 21.3531L13.8536 18.6459C13.9473 18.5522 14 18.425 14 18.2924V13.7066C14 13.574 14.0527 13.4468 14.1464 13.3531L15 12.4995M9 6.4995L15 12.4995M13.5 6.4995H18.5C18.7761 6.4995 19 6.72336 19 6.9995V8.29239C19 8.425 18.9473 8.55218 18.8536 8.64595L17.4127 10.0868" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7V7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91766 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M3 7H12" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const FolderCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M15 11L11.5657 14.4343C11.3677 14.6323 11.2687 14.7313 11.1545 14.7684C11.0541 14.8011 10.9459 14.8011 10.8455 14.7684C10.7314 14.7313 10.6323 14.6323 10.4343 14.4343L9 13" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M14 11L12 13M12 13L10 15M12 13L14 15M12 13L10 11" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderCodeIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M10 11L8.56568 12.4343C8.36768 12.6323 8.26867 12.7313 8.23158 12.8455C8.19895 12.9459 8.19895 13.0541 8.23158 13.1545C8.26867 13.2687 8.36768 13.3677 8.56569 13.5657L10 15M14 11L15.4343 12.4343C15.6323 12.6323 15.7313 12.7313 15.7684 12.8455C15.8011 12.9459 15.8011 13.0541 15.7684 13.1545C15.7313 13.2687 15.6323 13.3677 15.4343 13.5657L14 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderDocumentIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M15 11L9 11M15 15H9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderDownloadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M10 14L11.6608 15.75C11.6785 15.7686 11.6873 15.7779 11.7106 15.7971C11.7221 15.8066 11.7637 15.8357 11.7766 15.8433V15.8433C11.7766 15.8433 11.8282 15.8687 11.8282 15.8687C11.8836 15.8889 11.9418 15.8991 12 15.8991M14 14L12.3392 15.75C12.3215 15.7686 12.3127 15.7779 12.2894 15.7971C12.2779 15.8066 12.2363 15.8357 12.2234 15.8433V15.8433C12.2234 15.8433 12.1718 15.8687 12.1718 15.8687C12.1164 15.8889 12.0582 15.8991 12 15.8991M12 15.8991V10" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderEditIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M1.60352 6V14.8C1.60352 15.9201 1.60352 16.4802 1.8215 16.908C2.01325 17.2843 2.31921 17.5903 2.69553 17.782C3.12336 18 3.68341 18 4.80352 18H7.60352M1.60352 6H10.6035M1.60352 6C1.60352 4.89543 2.49895 4 3.60352 4H6.76924C7.14867 4 7.33838 4 7.52117 4.03429C7.68339 4.06472 7.84122 4.11512 7.99106 4.18433C8.15989 4.26231 8.3145 4.37226 8.62372 4.59214L10.6035 6M10.6035 6H17.6035M17.6213 11.4822L19.5378 9.56569C19.7358 9.36768 19.8348 9.26867 19.949 9.23158C20.0494 9.19895 20.1576 9.19895 20.258 9.23158C20.3722 9.26867 20.4712 9.36768 20.6692 9.56568L22.0378 10.9343C22.2358 11.1323 22.3348 11.2313 22.3719 11.3455C22.4046 11.4459 22.4046 11.5541 22.3719 11.6545C22.3348 11.7687 22.2358 11.8677 22.0378 12.0657L20.1213 13.9822M17.6213 11.4822L11.8378 17.2657C11.7514 17.3522 11.7081 17.3954 11.6772 17.4459C11.6498 17.4906 11.6296 17.5394 11.6173 17.5904C11.6035 17.6479 11.6035 17.7091 11.6035 17.8314V19.2C11.6035 19.48 11.6035 19.62 11.658 19.727C11.7059 19.8211 11.7824 19.8976 11.8765 19.9455C11.9835 20 12.1235 20 12.4035 20H13.7721C13.8944 20 13.9556 20 14.0131 19.9862C14.0642 19.9739 14.1129 19.9537 14.1577 19.9263C14.2081 19.8954 14.2514 19.8522 14.3378 19.7657L20.1213 13.9822M17.6213 11.4822L20.1213 13.9822" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M15 13L9 13" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M12 10V13M12 13V16M12 13H15M12 13H9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderSearchIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M13.2781 14.2573C13.7245 13.8058 14 13.1851 14 12.5C14 11.1193 12.8807 10 11.5 10C10.1193 10 9 11.1193 9 12.5C9 13.8807 10.1193 15 11.5 15C12.1957 15 12.8249 14.7159 13.2781 14.2573ZM13.2781 14.2573L15 16" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const FolderUploadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 7V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H12M3 7H12M3 7C3 5.89543 3.89543 5 5 5H8.16572C8.54515 5 8.73487 5 8.91765 5.03429C9.07987 5.06472 9.2377 5.11512 9.38754 5.18433C9.55638 5.26231 9.71098 5.37226 10.0202 5.59214L12 7M14 12L12.3392 10.25C12.3215 10.2314 12.3127 10.2221 12.2894 10.2029C12.2779 10.1934 12.2363 10.1643 12.2234 10.1567V10.1567C12.2234 10.1567 12.1718 10.1313 12.1718 10.1313C12.1164 10.1111 12.0582 10.1009 12 10.1009M10 12L11.6608 10.25C11.6785 10.2314 11.6873 10.2221 11.7106 10.2029C11.7221 10.1934 11.7637 10.1643 11.7766 10.1567V10.1567C11.7766 10.1567 11.8282 10.1313 11.8282 10.1313C11.8836 10.1111 11.9418 10.1009 12 10.1009M12 10.1009V16" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const GiftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 9.5L8.1245 7.9498C7.44534 7.67814 7 7.02035 7 6.28887C7 5.30091 7.81864 4.5 8.80661 4.5C9.52519 4.5 10.1881 4.92318 10.4799 5.57983L12 9.5ZM12 9.5L15.8755 7.9498C16.5547 7.67814 17 7.02035 17 6.28887C17 5.30091 16.1814 4.5 15.1934 4.5C14.4748 4.5 13.8119 4.92318 13.5201 5.57983L12 9.5ZM12 9.5V19.5M4 14.5H20M6 9.5H18C19.1046 9.5 20 10.3954 20 11.5V17.5C20 18.6046 19.1046 19.5 18 19.5H6C4.89543 19.5 4 18.6046 4 17.5V11.5C4 10.3954 4.89543 9.5 6 9.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const GlobalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C15.3344 14.8328 8.66563 14.8328 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C9.79086 21 7.5 16.9706 7.5 12C7.5 7.02944 9.79086 3 12 3M12 21C14.2091 21 16.5 16.9706 16.5 12C16.5 7.02944 14.2091 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const HeadphonesIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 12.5V11.5C5 7.63401 8.13401 4.5 12 4.5C15.866 4.5 19 7.63401 19 11.5V12.5M3.5 12.5H6.5C6.77614 12.5 7 12.7239 7 13V19C7 19.2761 6.77614 19.5 6.5 19.5H3.5C3.22386 19.5 3 19.2761 3 19V13C3 12.7239 3.22386 12.5 3.5 12.5ZM17.5 12.5H20.5C20.7761 12.5 21 12.7239 21 13V19C21 19.2761 20.7761 19.5 20.5 19.5H17.5C17.2239 19.5 17 19.2761 17 19V13C17 12.7239 17.2239 12.5 17.5 12.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const HideIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19.9999 20L16.7133 16.7134M3.99992 4L7.28656 7.28664M9.8786 9.87868C9.33571 10.4216 8.99992 11.1716 8.99992 12C8.99992 13.6569 10.3431 15 11.9999 15C12.8283 15 13.5783 14.6642 14.1212 14.1213M9.8786 9.87868L14.1212 14.1213M9.8786 9.87868L7.28656 7.28664M14.1212 14.1213L16.7133 16.7134M7.28656 7.28664C5.82188 8.14025 4.50472 9.41858 3.48186 11.1217C3.15774 11.6613 3.15774 12.3387 3.48186 12.8784C6.5604 18.0042 12.305 19.2825 16.7133 16.7134M10.9999 6.05456C14.5535 5.66576 18.2556 7.3548 20.518 11.1217C20.8421 11.6613 20.8421 12.3387 20.518 12.8784C20.2796 13.2753 20.0252 13.6492 19.7566 14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Home02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 11.35V16.75C4 17.6819 4 18.1478 4.15224 18.5154C4.35523 19.0054 4.74458 19.3948 5.23463 19.5978C5.60218 19.75 6.06812 19.75 7 19.75C7.93188 19.75 8.39782 19.75 8.76537 19.5978C9.25542 19.3948 9.64477 19.0054 9.84776 18.5154C10 18.1478 10 17.6819 10 16.75V15.75C10 14.6454 10.8954 13.75 12 13.75C13.1046 13.75 14 14.6454 14 15.75V16.75C14 17.6819 14 18.1478 14.1522 18.5154C14.3552 19.0054 14.7446 19.3948 15.2346 19.5978C15.6022 19.75 16.0681 19.75 17 19.75C17.9319 19.75 18.3978 19.75 18.7654 19.5978C19.2554 19.3948 19.6448 19.0054 19.8478 18.5154C20 18.1478 20 17.6819 20 16.75V11.35C20 10.7633 20 10.47 19.9231 10.2008C19.855 9.96232 19.7432 9.7386 19.5932 9.54105C19.424 9.318 19.1893 9.142 18.72 8.79L13.92 5.19C13.2315 4.67361 12.8872 4.41542 12.5091 4.31589C12.1754 4.22804 11.8246 4.22804 11.4909 4.31589C11.1128 4.41542 10.7685 4.67361 10.08 5.19L5.28 8.79C4.81067 9.142 4.576 9.318 4.40675 9.54105C4.25685 9.7386 4.14499 9.96232 4.07689 10.2008C4 10.47 4 10.7633 4 11.35Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const HomeCheck01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 11.5858L11.5657 15.0201C11.3677 15.2181 11.2687 15.3171 11.1545 15.3542C11.0541 15.3868 10.9459 15.3868 10.8455 15.3542C10.7314 15.3171 10.6323 15.2181 10.4343 15.0201L9 13.5858M4 16.3858V12.9113C4 12.4221 4 12.1775 4.05526 11.9473C4.10425 11.7433 4.18506 11.5482 4.29472 11.3692C4.4184 11.1674 4.59135 10.9944 4.93726 10.6485L9.73726 5.84853C10.5293 5.0565 10.9253 4.66048 11.382 4.5121C11.7837 4.38159 12.2163 4.38159 12.618 4.5121C13.0747 4.66048 13.4707 5.0565 14.2627 5.84853L19.0627 10.6485C19.4086 10.9944 19.5816 11.1674 19.7053 11.3692C19.8149 11.5482 19.8957 11.7433 19.9447 11.9473C20 12.1775 20 12.4221 20 12.9113V16.3858C20 17.5059 20 18.0659 19.782 18.4938C19.5903 18.8701 19.2843 19.1761 18.908 19.3678C18.4802 19.5858 17.9201 19.5858 16.8 19.5858H7.2C6.0799 19.5858 5.51984 19.5858 5.09202 19.3678C4.71569 19.1761 4.40973 18.8701 4.21799 18.4938C4 18.0659 4 17.5059 4 16.3858Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeCheck02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 11.75L11.5657 15.1843C11.3677 15.3823 11.2687 15.4813 11.1545 15.5184C11.0541 15.5511 10.9459 15.5511 10.8455 15.5184C10.7314 15.4813 10.6323 15.3823 10.4343 15.1843L9 13.75M4 16.55V11.35C4 10.7633 4 10.47 4.07689 10.2008C4.14499 9.96232 4.25685 9.7386 4.40675 9.54105C4.576 9.318 4.81067 9.142 5.28 8.79L10.08 5.19C10.7685 4.67361 11.1128 4.41542 11.4909 4.31589C11.8246 4.22804 12.1754 4.22804 12.5091 4.31589C12.8872 4.41542 13.2315 4.67361 13.92 5.19L18.72 8.79C19.1893 9.142 19.424 9.318 19.5932 9.54105C19.7432 9.7386 19.855 9.96232 19.9231 10.2008C20 10.47 20 10.7633 20 11.35V16.55C20 17.6701 20 18.2302 19.782 18.658C19.5903 19.0343 19.2843 19.3403 18.908 19.532C18.4802 19.75 17.9201 19.75 16.8 19.75H7.2C6.0799 19.75 5.51984 19.75 5.09202 19.532C4.71569 19.3403 4.40973 19.0343 4.21799 18.658C4 18.2302 4 17.6701 4 16.55Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeClose01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 11.5858L12 13.5858M12 13.5858L10 15.5858M12 13.5858L14 15.5858M12 13.5858L10 11.5858M4 16.3858V12.9113C4 12.4221 4 12.1775 4.05526 11.9473C4.10425 11.7433 4.18506 11.5482 4.29472 11.3692C4.4184 11.1674 4.59135 10.9944 4.93726 10.6485L9.73726 5.84853C10.5293 5.0565 10.9253 4.66048 11.382 4.5121C11.7837 4.38159 12.2163 4.38159 12.618 4.5121C13.0747 4.66048 13.4707 5.0565 14.2627 5.84853L19.0627 10.6485C19.4086 10.9944 19.5816 11.1674 19.7053 11.3692C19.8149 11.5482 19.8957 11.7433 19.9447 11.9473C20 12.1775 20 12.4221 20 12.9113V16.3858C20 17.5059 20 18.0659 19.782 18.4938C19.5903 18.8701 19.2843 19.1761 18.908 19.3678C18.4802 19.5858 17.9201 19.5858 16.8 19.5858H7.2C6.0799 19.5858 5.51984 19.5858 5.09202 19.3678C4.71569 19.1761 4.40973 18.8701 4.21799 18.4938C4 18.0659 4 17.5059 4 16.3858Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeClose02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 11.75L12 13.75M12 13.75L10 15.75M12 13.75L14 15.75M12 13.75L10 11.75M4 16.55V11.35C4 10.7633 4 10.47 4.07689 10.2008C4.14499 9.96232 4.25685 9.7386 4.40675 9.54105C4.576 9.318 4.81067 9.142 5.28 8.79L10.08 5.19C10.7685 4.67361 11.1128 4.41542 11.4909 4.31589C11.8246 4.22804 12.1754 4.22804 12.5091 4.31589C12.8872 4.41542 13.2315 4.67361 13.92 5.19L18.72 8.79C19.1893 9.142 19.424 9.318 19.5932 9.54105C19.7432 9.7386 19.855 9.96232 19.9231 10.2008C20 10.47 20 10.7633 20 11.35V16.55C20 17.6701 20 18.2302 19.782 18.658C19.5903 19.0343 19.2843 19.3403 18.908 19.532C18.4802 19.75 17.9201 19.75 16.8 19.75H7.2C6.0799 19.75 5.51984 19.75 5.09202 19.532C4.71569 19.3403 4.40973 19.0343 4.21799 18.658C4 18.2302 4 17.6701 4 16.55Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeLine01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2 19.5858H22M4 17.9858V12.9113C4 12.4221 4 12.1775 4.05526 11.9473C4.10425 11.7433 4.18506 11.5482 4.29472 11.3692C4.4184 11.1674 4.59135 10.9944 4.93726 10.6485L9.73726 5.84853C10.5293 5.0565 10.9253 4.66048 11.382 4.5121C11.7837 4.38159 12.2163 4.38159 12.618 4.5121C13.0747 4.66048 13.4707 5.0565 14.2627 5.84853L19.0627 10.6485C19.4086 10.9944 19.5816 11.1674 19.7053 11.3692C19.8149 11.5482 19.8957 11.7433 19.9447 11.9473C20 12.1775 20 12.4221 20 12.9113V17.9858C20 18.5458 20 18.8259 19.891 19.0398C19.7951 19.2279 19.6422 19.3809 19.454 19.4768C19.2401 19.5858 18.9601 19.5858 18.4 19.5858H15.6C15.0399 19.5858 14.7599 19.5858 14.546 19.4768C14.3578 19.3809 14.2049 19.2279 14.109 19.0398C14 18.8259 14 18.5458 14 17.9858V15.5858C14 14.4812 13.1046 13.5858 12 13.5858C10.8954 13.5858 10 14.4812 10 15.5858V17.9858C10 18.5458 10 18.8259 9.89101 19.0398C9.79513 19.2279 9.64215 19.3809 9.45399 19.4768C9.24008 19.5858 8.96005 19.5858 8.4 19.5858H5.6C5.03995 19.5858 4.75992 19.5858 4.54601 19.4768C4.35785 19.3809 4.20487 19.2279 4.10899 19.0398C4 18.8259 4 18.5458 4 17.9858Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeLine02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2 19.75H22M4 18.15V11.35C4 10.7633 4 10.47 4.07689 10.2008C4.14499 9.96232 4.25685 9.7386 4.40675 9.54105C4.576 9.318 4.81067 9.142 5.28 8.79L10.08 5.19C10.7685 4.67361 11.1128 4.41542 11.4909 4.31589C11.8246 4.22804 12.1754 4.22804 12.5091 4.31589C12.8872 4.41542 13.2315 4.67361 13.92 5.19L18.72 8.79C19.1893 9.142 19.424 9.318 19.5932 9.54105C19.7432 9.7386 19.855 9.96232 19.9231 10.2008C20 10.47 20 10.7633 20 11.35V18.15C20 18.7101 20 18.9901 19.891 19.204C19.7951 19.3922 19.6422 19.5451 19.454 19.641C19.2401 19.75 18.9601 19.75 18.4 19.75H15.6C15.0399 19.75 14.7599 19.75 14.546 19.641C14.3578 19.5451 14.2049 19.3922 14.109 19.204C14 18.9901 14 18.7101 14 18.15V15.75C14 14.6454 13.1046 13.75 12 13.75C10.8954 13.75 10 14.6454 10 15.75V18.15C10 18.7101 10 18.9901 9.89101 19.204C9.79513 19.3922 9.64215 19.5451 9.45399 19.641C9.24008 19.75 8.96005 19.75 8.4 19.75H5.6C5.03995 19.75 4.75992 19.75 4.54601 19.641C4.35785 19.5451 4.20487 19.3922 4.10899 19.204C4 18.9901 4 18.7101 4 18.15Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeMinus011Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 12.9113V16.5858C4 17.5177 4 17.9836 4.15224 18.3512C4.35523 18.8412 4.74458 19.2306 5.23463 19.4335C5.60218 19.5858 6.06812 19.5858 7 19.5858C7.93188 19.5858 8.39782 19.5858 8.76537 19.4335C9.25542 19.2306 9.64477 18.8412 9.84776 18.3512C10 17.9836 10 17.5177 10 16.5858V15.5858C10 14.4812 10.8954 13.5858 12 13.5858C13.1046 13.5858 14 14.4812 14 15.5858V16.5858C14 17.5177 14 17.9836 14.1522 18.3512C14.3552 18.8412 14.7446 19.2306 15.2346 19.4335C15.6022 19.5858 16.0681 19.5858 17 19.5858C17.9319 19.5858 18.3978 19.5858 18.7654 19.4335C19.2554 19.2306 19.6448 18.8412 19.8478 18.3512C20 17.9836 20 17.5177 20 16.5858V12.9113C20 12.4221 20 12.1775 19.9447 11.9473C19.8957 11.7433 19.8149 11.5482 19.7053 11.3692C19.5816 11.1674 19.4086 10.9944 19.0627 10.6485L14.2627 5.84853C13.4707 5.0565 13.0747 4.66048 12.618 4.5121C12.2163 4.38159 11.7837 4.38159 11.382 4.5121C10.9253 4.66048 10.5293 5.0565 9.73726 5.84853L4.93726 10.6485C4.59135 10.9944 4.4184 11.1674 4.29472 11.3692C4.18506 11.5482 4.10425 11.7433 4.05526 11.9473C4 12.1775 4 12.4221 4 12.9113Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const HomeMinus01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 13.5858H9M4 16.3858V12.9113C4 12.4221 4 12.1775 4.05526 11.9473C4.10425 11.7433 4.18506 11.5482 4.29472 11.3692C4.4184 11.1674 4.59135 10.9944 4.93726 10.6485L9.73726 5.84853C10.5293 5.0565 10.9253 4.66048 11.382 4.5121C11.7837 4.38159 12.2163 4.38159 12.618 4.5121C13.0747 4.66048 13.4707 5.0565 14.2627 5.84853L19.0627 10.6485C19.4086 10.9944 19.5816 11.1674 19.7053 11.3692C19.8149 11.5482 19.8957 11.7433 19.9447 11.9473C20 12.1775 20 12.4221 20 12.9113V16.3858C20 17.5059 20 18.0659 19.782 18.4938C19.5903 18.8701 19.2843 19.1761 18.908 19.3678C18.4802 19.5858 17.9201 19.5858 16.8 19.5858H7.2C6.0799 19.5858 5.51984 19.5858 5.09202 19.3678C4.71569 19.1761 4.40973 18.8701 4.21799 18.4938C4 18.0659 4 17.5059 4 16.3858Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomeMinus02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 13.75H9M4 16.55V11.35C4 10.7633 4 10.47 4.07689 10.2008C4.14499 9.96232 4.25685 9.7386 4.40675 9.54105C4.576 9.318 4.81067 9.142 5.28 8.79L10.08 5.19C10.7685 4.67361 11.1128 4.41542 11.4909 4.31589C11.8246 4.22804 12.1754 4.22804 12.5091 4.31589C12.8872 4.41542 13.2315 4.67361 13.92 5.19L18.72 8.79C19.1893 9.142 19.424 9.318 19.5932 9.54105C19.7432 9.7386 19.855 9.96232 19.9231 10.2008C20 10.47 20 10.7633 20 11.35V16.55C20 17.6701 20 18.2302 19.782 18.658C19.5903 19.0343 19.2843 19.3403 18.908 19.532C18.4802 19.75 17.9201 19.75 16.8 19.75H7.2C6.0799 19.75 5.51984 19.75 5.09202 19.532C4.71569 19.3403 4.40973 19.0343 4.21799 18.658C4 18.2302 4 17.6701 4 16.55Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomePlus01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 10.5858V13.5858M12 13.5858V16.5858M12 13.5858H15M12 13.5858H9M4 16.3858V12.9113C4 12.4221 4 12.1775 4.05526 11.9473C4.10425 11.7433 4.18506 11.5482 4.29472 11.3692C4.4184 11.1674 4.59135 10.9944 4.93726 10.6485L9.73726 5.84853C10.5293 5.0565 10.9253 4.66048 11.382 4.5121C11.7837 4.38159 12.2163 4.38159 12.618 4.5121C13.0747 4.66048 13.4707 5.0565 14.2627 5.84853L19.0627 10.6485C19.4086 10.9944 19.5816 11.1674 19.7053 11.3692C19.8149 11.5482 19.8957 11.7433 19.9447 11.9473C20 12.1775 20 12.4221 20 12.9113V16.3858C20 17.5059 20 18.0659 19.782 18.4938C19.5903 18.8701 19.2843 19.1761 18.908 19.3678C18.4802 19.5858 17.9201 19.5858 16.8 19.5858H7.2C6.0799 19.5858 5.51984 19.5858 5.09202 19.3678C4.71569 19.1761 4.40973 18.8701 4.21799 18.4938C4 18.0659 4 17.5059 4 16.3858Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const HomePlus02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 10.75V13.75M12 13.75V16.75M12 13.75H15M12 13.75H9M4 16.55V11.35C4 10.7633 4 10.47 4.07689 10.2008C4.14499 9.96232 4.25685 9.7386 4.40675 9.54105C4.576 9.318 4.81067 9.142 5.28 8.79L10.08 5.19C10.7685 4.67361 11.1128 4.41542 11.4909 4.31589C11.8246 4.22804 12.1754 4.22804 12.5091 4.31589C12.8872 4.41542 13.2315 4.67361 13.92 5.19L18.72 8.79C19.1893 9.142 19.424 9.318 19.5932 9.54105C19.7432 9.7386 19.855 9.96232 19.9231 10.2008C20 10.47 20 10.7633 20 11.35V16.55C20 17.6701 20 18.2302 19.782 18.658C19.5903 19.0343 19.2843 19.3403 18.908 19.532C18.4802 19.75 17.9201 19.75 16.8 19.75H7.2C6.0799 19.75 5.51984 19.75 5.09202 19.532C4.71569 19.3403 4.40973 19.0343 4.21799 18.658C4 18.2302 4 17.6701 4 16.55Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LayersSmIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2.9436 14.836L11.4222 20.0173C11.7423 20.2129 12.1449 20.2129 12.4651 20.0173L20.9436 14.836M3.42911 8.81228L11.4855 3.97848C11.8021 3.78847 12.1978 3.78847 12.5144 3.97847L20.5708 8.81228C21.2181 9.20069 21.2181 10.1389 20.5708 10.5273L12.5144 15.3611C12.1978 15.5511 11.8021 15.5511 11.4855 15.3611L3.42911 10.5273C2.78177 10.1389 2.78177 9.20069 3.42911 8.81228Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LayersLgIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2.9436 12.586L11.4222 17.7673C11.7423 17.9629 12.1449 17.9629 12.4651 17.7673L20.9436 12.586M2.9436 17.086L11.4222 22.2673C11.7423 22.4629 12.1449 22.4629 12.4651 22.2673L20.9436 17.086M3.42911 6.56228L11.4855 1.72848C11.8021 1.53847 12.1978 1.53847 12.5144 1.72847L20.5708 6.56228C21.2181 6.95069 21.2181 7.88887 20.5708 8.27727L12.5144 13.1111C12.1978 13.3011 11.8021 13.3011 11.4855 13.1111L3.42911 8.27727C2.78177 7.88887 2.78177 6.95069 3.42911 6.56228Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LayerCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 8L13.5657 11.4343C13.3677 11.6323 13.2687 11.7313 13.1545 11.7684C13.0541 11.8011 12.9459 11.8011 12.8455 11.7684C12.7314 11.7313 12.6323 11.6323 12.4343 11.4343L11 10M17 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V7M10.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V13.8C21 14.9201 21 15.4802 20.782 15.908C20.5903 16.2843 20.2843 16.5903 19.908 16.782C19.4802 17 18.9201 17 17.8 17H10.2C9.0799 17 8.51984 17 8.09202 16.782C7.71569 16.5903 7.40973 16.2843 7.21799 15.908C7 15.4802 7 14.9201 7 13.8V6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.07989 3 10.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const LayerCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 8L14 10M14 10L12 12M14 10L16 12M14 10L12 8M17 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V7M10.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V13.8C21 14.9201 21 15.4802 20.782 15.908C20.5903 16.2843 20.2843 16.5903 19.908 16.782C19.4802 17 18.9201 17 17.8 17H10.2C9.0799 17 8.51984 17 8.09202 16.782C7.71569 16.5903 7.40973 16.2843 7.21799 15.908C7 15.4802 7 14.9201 7 13.8V6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.07989 3 10.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LayerMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 10L11 10M17 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V7M10.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V13.8C21 14.9201 21 15.4802 20.782 15.908C20.5903 16.2843 20.2843 16.5903 19.908 16.782C19.4802 17 18.9201 17 17.8 17H10.2C9.0799 17 8.51984 17 8.09202 16.782C7.71569 16.5903 7.40973 16.2843 7.21799 15.908C7 15.4802 7 14.9201 7 13.8V6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.07989 3 10.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const LayerPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 7V10M14 10V13M14 10H17M14 10H11M17 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V7M10.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V13.8C21 14.9201 21 15.4802 20.782 15.908C20.5903 16.2843 20.2843 16.5903 19.908 16.782C19.4802 17 18.9201 17 17.8 17H10.2C9.0799 17 8.51984 17 8.09202 16.782C7.71569 16.5903 7.40973 16.2843 7.21799 15.908C7 15.4802 7 14.9201 7 13.8V6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.07989 3 10.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Like01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16.5 4C14.0147 4 12 6.09816 12 8.68638C12 6.09816 9.98528 4 7.5 4C5.01472 4 3 6.09816 3 8.68638C3 9.99655 3.51626 11.1812 4.34849 12.0316L12 20L19.6515 12.0316C20.4837 11.1812 21 9.99655 21 8.68638C21 6.09816 18.9853 4 16.5 4Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const Like02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 9.31215C3 14.6024 8.40517 17.0581 11.2533 19.3408C11.6835 19.6856 12.3165 19.6856 12.7467 19.3408C15.5948 17.0581 21 14.6024 21 9.31215C21 2.54298 13 2.56601 12 7.55373C11 2.56601 3 2.54298 3 9.31215Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const LinkIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.17195 9.17155L14.8288 14.8284M17.6572 10.5858L19.0714 12C21.0241 13.9526 21.0241 17.1184 19.0714 19.071C17.1188 21.0237 13.953 21.0237 12.0004 19.071L10.5862 17.6568M6.34352 13.4142L4.92931 12C2.97669 10.0474 2.97669 6.88153 4.92931 4.92891C6.88193 2.97628 10.0478 2.97628 12.0004 4.92891L13.4146 6.34312" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LinkGapIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.6922 10.6213L19.1064 12.0356C21.059 13.9882 21.059 17.154 19.1064 19.1066C17.1538 21.0592 13.9879 21.0592 12.0353 19.1066L10.6211 17.6924M6.37847 13.4498L4.96425 12.0356C3.01163 10.0829 3.01163 6.91711 4.96425 4.96449C6.91687 3.01187 10.0827 3.01187 12.0353 4.96449L13.4495 6.3787M16.4287 3.42896V5.42896M20.4287 7.42896L18.4287 7.42895M7.42871 20.429L7.42871 18.429M3.42871 16.429H5.42871" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LinkHorizontalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8 12H16M15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H15M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LinkHorizontalOffIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7 7C5.87439 7 4.83566 7.37194 4 7.99963C2.78555 8.91184 2 10.3642 2 12C2 14.7614 4.23858 17 7 17H9M8 12H12M15 7H17C19.7614 7 22 9.23858 22 12C22 13.1257 21.6278 14.1644 21 15M5 5L19 19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LinkVerticalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 8L12 16M17 15L17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17L7 15M7 9L7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7L17 9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ListAdortementIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 8V8C5.00552 8 5.01 8.00448 5.01 8.01V8.01M5 12.01V12.01C5.00552 12.01 5.01 12.0055 5.01 12V12M5 16H5.01M9 16H19M9 12H19M9 8H19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const LockIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17 10.2676C17 7.50614 14.7614 5 12 5C9.23858 5 7 7.50614 7 10.2676M6 12V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V12C18 10.8954 17.1046 10 16 10H8C6.89543 10 6 10.8954 6 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const MailIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M21 7.22932L13.395 12.2458C12.5605 12.7794 11.4395 12.7794 10.605 12.2458L3 7.22932M5.25 5.5H18.75C19.9926 5.5 21 6.47005 21 7.66667V16.3333C21 17.53 19.9926 18.5 18.75 18.5H5.25C4.00736 18.5 3 17.53 3 16.3333V7.66667C3 6.47005 4.00736 5.5 5.25 5.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const MailOpenIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M21 9.13563V18.2396C21 19.4363 19.9926 20.4063 18.75 20.4063H5.25C4.00736 20.4063 3 19.4363 3 18.2396V9.13563M21 9.13563L13.395 14.1521C12.5605 14.6857 11.4395 14.6857 10.605 14.1521L3 9.13563M21 9.13563L13.395 3.99389C12.5605 3.46029 11.4395 3.46029 10.605 3.99389L3 9.13563" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const MapIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.33333 6L4 4V18L9.33333 20M9.33333 6L14.6667 4M9.33333 6V20M14.6667 4L20 6V20L14.6667 18M14.6667 4V18M9.33333 20L14.6667 18" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MapPInIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.6569 5.28614C14.5327 2.23795 9.46734 2.23795 6.34315 5.28614C4.78143 6.80987 4.00038 8.80684 4 10.8039C3.99962 12.802 4.78067 14.8002 6.34315 16.3246L10.3676 20.3309C11.2638 21.223 12.7362 21.223 13.6324 20.3309L17.6569 16.3246C19.2193 14.8002 20.0004 12.802 20 10.8039C19.9996 8.80684 19.2186 6.80987 17.6569 5.28614Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
    <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const MentionIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 18.3264C14.0907 18.7583 13.0736 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13V9M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 6H19M5 12H19M5 18H19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuAlt03Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10 18H19M5 6H14M5 12H19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuAltLeft01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 18H14M5 6H14M5 12H19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuAltLeft02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 6H19M5 12H14M5 18H19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuAltRight01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19 18H10M19 6H10M19 12H5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuAltRight02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19 6H5M19 12H10M19 18H5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MenuCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 15H10M4 11H13M4 7H15M14 15L16 17L20 13" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MenuCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4.5 15H10.5M4.5 11H13.5M4.5 7H15.5M15.5 13L17.5 15M17.5 15L19.5 17M17.5 15L19.5 13M17.5 15L15.5 17" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MenuDownloadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 14H11M5 10H14M5 6H16M17 12V18M17 18L19 16M17 18L15 16" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MenuMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 16H10M4 12H13M4 8H15M20 16L14 16" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MenuPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4 14.5H10M4 10.5H13M4 6.5H15M17 11.5V17.5M20 14.5L14 14.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MenuUploadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 14H11M5 10H14M5 6H16M17 18V12M17 12L15 14M17 12L19 14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MoreGridBigIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5.98486 18.015V18.005H5.99486V18.015H5.98486Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9949 18.015V18.005H12.0049V18.015H11.9949Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9949 12.005V11.995H12.0049V12.005H11.9949Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.0049 5.99499V5.98499H18.0149V5.99499H18.0049Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9949 5.99499V5.98499H12.0049V5.99499H11.9949Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.0049 12.005V11.995H18.0149V12.005H18.0049Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.98486 5.99499V5.98499H5.99486V5.99499H5.98486Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.98486 12.005V11.995H5.99486V12.005H5.98486Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.0049 18.015V18.005H18.0149V18.015H18.0049Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MoreGridSmallIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.9951 8.995L15.0051 8.995V9.005H14.9951V8.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.99512 14.995H9.00512V15.005H8.99512L8.99512 14.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.9951 14.995H15.0051V15.005H14.9951V14.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.99512 8.995L9.00512 8.995V9.005H8.99512L8.99512 8.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MoreHorizontalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.9951 11.995L12.0051 11.995V12.005H11.9951V11.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.99512 11.995L6.00512 11.995V12.005H5.99512L5.99512 11.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.9951 11.995L18.0051 11.995V12.005H17.9951V11.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9951 11.995L12.0051 11.995V12.005H11.9951V11.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.9951 11.995L18.0051 11.995V12.005H17.9951V11.995Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MoreVerticalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.9951 11.995V12.005H12.0051V11.995H11.9951ZM11.9951 17.995V18.005H12.0051V17.995H11.9951ZM11.9951 5.995V6.005H12.0051V5.995H11.9951Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const MoveIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 3V21M12 3L9 6M12 3L15 6M12 21L15 18M12 21L9 18M21 12H3M21 12L18 9M21 12L18 15M3 12L6 15M3 12L6 9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MoveHorizontalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 12L21 12M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const MoveVerticalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 21V3M12 21L15 18M12 21L9 18M12 3L9 6M12 3L15 6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const NavigationIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M4.20585 3.57299C3.81497 3.4427 3.4431 3.81457 3.5734 4.20545L8.87545 20.1116C9.01631 20.5342 9.59779 20.5755 9.797 20.1771L13.1826 13.4058C13.231 13.3091 13.3095 13.2306 13.4062 13.1822L20.1775 9.7966C20.5759 9.59739 20.5346 9.01591 20.112 8.87505L4.20585 3.57299Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const NoteEditIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10.9893 5H4.98926C3.88469 5 2.98926 5.89543 2.98926 7V19C2.98926 20.1046 3.88469 21 4.98926 21H16.9893C18.0938 21 18.9893 20.1046 18.9893 19V13M18.1815 7.94975L21.01 5.12132L18.8886 3L16.0602 5.82843M18.1815 7.94975L16.0602 5.82843M18.1815 7.94975L12.5247 13.6066L10.0498 13.9602L10.4034 11.4853L16.0602 5.82843" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const NoteSearchIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.7042 15.6764C16.2993 15.0743 16.6667 14.2467 16.6667 13.3333C16.6667 11.4924 15.1743 10 13.3333 10C11.4924 10 10 11.4924 10 13.3333C10 15.1743 11.4924 16.6667 13.3333 16.6667C14.2609 16.6667 15.0999 16.2878 15.7042 15.6764ZM15.7042 15.6764L18 18M20 12V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H12" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const OctagonIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.93726 7.68774L7.68774 3.93726C8.03365 3.59135 8.2066 3.4184 8.40843 3.29472C8.58737 3.18506 8.78246 3.10425 8.98654 3.05526C9.21671 3 9.4613 3 9.95048 3H14.0495C14.5387 3 14.7833 3 15.0135 3.05526C15.2175 3.10425 15.4126 3.18506 15.5916 3.29472C15.7934 3.4184 15.9664 3.59135 16.3122 3.93725L16.3123 3.93726L20.0627 7.68774C20.4086 8.03365 20.5816 8.2066 20.7053 8.40843C20.8149 8.58737 20.8957 8.78246 20.9447 8.98654C21 9.21671 21 9.4613 21 9.95048V14.0495C21 14.5387 21 14.7833 20.9447 15.0135C20.8957 15.2175 20.8149 15.4126 20.7053 15.5916C20.5816 15.7934 20.4086 15.9664 20.0627 16.3123L16.3123 20.0627C15.9664 20.4086 15.7934 20.5816 15.5916 20.7053C15.4126 20.8149 15.2175 20.8957 15.0135 20.9447C14.7833 21 14.5387 21 14.0495 21H9.95048C9.4613 21 9.21671 21 8.98654 20.9447C8.78246 20.8957 8.58737 20.8149 8.40843 20.7053C8.2066 20.5816 8.03365 20.4086 7.68774 20.0627L3.93726 16.3123C3.59135 15.9664 3.4184 15.7934 3.29472 15.5916C3.18506 15.4126 3.10425 15.2175 3.05526 15.0135C3 14.7833 3 14.5387 3 14.0495V9.95048C3 9.4613 3 9.21671 3.05526 8.98654C3.10425 8.78246 3.18506 8.58737 3.29472 8.40843C3.4184 8.2066 3.59135 8.03365 3.93726 7.68774Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const OctagonCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 10L11.5657 13.4343C11.3677 13.6323 11.2687 13.7313 11.1545 13.7684C11.0541 13.8011 10.9459 13.8011 10.8455 13.7684C10.7314 13.7313 10.6323 13.6323 10.4343 13.4343L9 12M7.68774 3.93726L3.93726 7.68774C3.59135 8.03365 3.4184 8.2066 3.29472 8.40843C3.18506 8.58737 3.10425 8.78246 3.05526 8.98654C3 9.21671 3 9.4613 3 9.95048V14.0495C3 14.5387 3 14.7833 3.05526 15.0135C3.10425 15.2175 3.18506 15.4126 3.29472 15.5916C3.4184 15.7934 3.59135 15.9664 3.93726 16.3123L7.68774 20.0627C8.03365 20.4086 8.2066 20.5816 8.40843 20.7053C8.58737 20.8149 8.78246 20.8957 8.98654 20.9447C9.21671 21 9.4613 21 9.95048 21H14.0495C14.5387 21 14.7833 21 15.0135 20.9447C15.2175 20.8957 15.4126 20.8149 15.5916 20.7053C15.7934 20.5816 15.9664 20.4086 16.3123 20.0627L20.0627 16.3123C20.4086 15.9664 20.5816 15.7934 20.7053 15.5916C20.8149 15.4126 20.8957 15.2175 20.9447 15.0135C21 14.7833 21 14.5387 21 14.0495V9.95048C21 9.4613 21 9.21671 20.9447 8.98654C20.8957 8.78246 20.8149 8.58737 20.7053 8.40843C20.5816 8.2066 20.4086 8.03365 20.0627 7.68774L16.3123 3.93726C15.9664 3.59136 15.7934 3.4184 15.5916 3.29472C15.4126 3.18506 15.2175 3.10425 15.0135 3.05526C14.7833 3 14.5387 3 14.0495 3H9.95048C9.4613 3 9.21671 3 8.98654 3.05526C8.78246 3.10425 8.58737 3.18506 8.40843 3.29472C8.2066 3.4184 8.03365 3.59135 7.68774 3.93726Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const OctagonCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 10L12 12M12 12L10 14M12 12L14 14M12 12L10 10M7.68774 3.93726L3.93726 7.68774C3.59135 8.03365 3.4184 8.2066 3.29472 8.40843C3.18506 8.58737 3.10425 8.78246 3.05526 8.98654C3 9.21671 3 9.4613 3 9.95048V14.0495C3 14.5387 3 14.7833 3.05526 15.0135C3.10425 15.2175 3.18506 15.4126 3.29472 15.5916C3.4184 15.7934 3.59135 15.9664 3.93726 16.3123L7.68774 20.0627C8.03365 20.4086 8.2066 20.5816 8.40843 20.7053C8.58737 20.8149 8.78246 20.8957 8.98654 20.9447C9.21671 21 9.4613 21 9.95048 21H14.0495C14.5387 21 14.7833 21 15.0135 20.9447C15.2175 20.8957 15.4126 20.8149 15.5916 20.7053C15.7934 20.5816 15.9664 20.4086 16.3123 20.0627L20.0627 16.3123C20.4086 15.9664 20.5816 15.7934 20.7053 15.5916C20.8149 15.4126 20.8957 15.2175 20.9447 15.0135C21 14.7833 21 14.5387 21 14.0495V9.95048C21 9.4613 21 9.21671 20.9447 8.98654C20.8957 8.78246 20.8149 8.58737 20.7053 8.40843C20.5816 8.2066 20.4086 8.03365 20.0627 7.68774L16.3123 3.93726C15.9664 3.59136 15.7934 3.4184 15.5916 3.29472C15.4126 3.18506 15.2175 3.10425 15.0135 3.05526C14.7833 3 14.5387 3 14.0495 3H9.95048C9.4613 3 9.21671 3 8.98654 3.05526C8.78246 3.10425 8.58737 3.18506 8.40843 3.29472C8.2066 3.4184 8.03365 3.59135 7.68774 3.93726Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const OctagonMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 12H9M7.68774 3.93726L3.93726 7.68774C3.59135 8.03365 3.4184 8.2066 3.29472 8.40843C3.18506 8.58737 3.10425 8.78246 3.05526 8.98654C3 9.21671 3 9.4613 3 9.95048V14.0495C3 14.5387 3 14.7833 3.05526 15.0135C3.10425 15.2175 3.18506 15.4126 3.29472 15.5916C3.4184 15.7934 3.59135 15.9664 3.93726 16.3123L7.68774 20.0627C8.03365 20.4086 8.2066 20.5816 8.40843 20.7053C8.58737 20.8149 8.78246 20.8957 8.98654 20.9447C9.21671 21 9.4613 21 9.95048 21H14.0495C14.5387 21 14.7833 21 15.0135 20.9447C15.2175 20.8957 15.4126 20.8149 15.5916 20.7053C15.7934 20.5816 15.9664 20.4086 16.3123 20.0627L20.0627 16.3123C20.4086 15.9664 20.5816 15.7934 20.7053 15.5916C20.8149 15.4126 20.8957 15.2175 20.9447 15.0135C21 14.7833 21 14.5387 21 14.0495V9.95048C21 9.4613 21 9.21671 20.9447 8.98654C20.8957 8.78246 20.8149 8.58737 20.7053 8.40843C20.5816 8.2066 20.4086 8.03365 20.0627 7.68774L16.3123 3.93726C15.9664 3.59136 15.7934 3.4184 15.5916 3.29472C15.4126 3.18506 15.2175 3.10425 15.0135 3.05526C14.7833 3 14.5387 3 14.0495 3H9.95048C9.4613 3 9.21671 3 8.98654 3.05526C8.78246 3.10425 8.58737 3.18506 8.40843 3.29472C8.2066 3.4184 8.03365 3.59135 7.68774 3.93726Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const OctagonPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 9V12M12 12V15M12 12H15M12 12H9M7.68774 3.93726L3.93726 7.68774C3.59135 8.03365 3.4184 8.2066 3.29472 8.40843C3.18506 8.58737 3.10425 8.78246 3.05526 8.98654C3 9.21671 3 9.4613 3 9.95048V14.0495C3 14.5387 3 14.7833 3.05526 15.0135C3.10425 15.2175 3.18506 15.4126 3.29472 15.5916C3.4184 15.7934 3.59135 15.9664 3.93726 16.3123L7.68774 20.0627C8.03365 20.4086 8.2066 20.5816 8.40843 20.7053C8.58737 20.8149 8.78246 20.8957 8.98654 20.9447C9.21671 21 9.4613 21 9.95048 21H14.0495C14.5387 21 14.7833 21 15.0135 20.9447C15.2175 20.8957 15.4126 20.8149 15.5916 20.7053C15.7934 20.5816 15.9664 20.4086 16.3123 20.0627L20.0627 16.3123C20.4086 15.9664 20.5816 15.7934 20.7053 15.5916C20.8149 15.4126 20.8957 15.2175 20.9447 15.0135C21 14.7833 21 14.5387 21 14.0495V9.95048C21 9.4613 21 9.21671 20.9447 8.98654C20.8957 8.78246 20.8149 8.58737 20.7053 8.40843C20.5816 8.2066 20.4086 8.03365 20.0627 7.68774L16.3123 3.93726C15.9664 3.59136 15.7934 3.4184 15.5916 3.29472C15.4126 3.18506 15.2175 3.10425 15.0135 3.05526C14.7833 3 14.5387 3 14.0495 3H9.95048C9.4613 3 9.21671 3 8.98654 3.05526C8.78246 3.10425 8.58737 3.18506 8.40843 3.29472C8.2066 3.4184 8.03365 3.59135 7.68774 3.93726Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const OctagonWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7V14M7.68774 3.93726L3.93726 7.68774C3.59135 8.03365 3.4184 8.2066 3.29472 8.40843C3.18506 8.58737 3.10425 8.78246 3.05526 8.98654C3 9.21671 3 9.4613 3 9.95048V14.0495C3 14.5387 3 14.7833 3.05526 15.0135C3.10425 15.2175 3.18506 15.4126 3.29472 15.5916C3.4184 15.7934 3.59135 15.9664 3.93726 16.3123L7.68774 20.0627C8.03365 20.4086 8.2066 20.5816 8.40843 20.7053C8.58737 20.8149 8.78246 20.8957 8.98654 20.9447C9.21671 21 9.4613 21 9.95048 21H14.0495C14.5387 21 14.7833 21 15.0135 20.9447C15.2175 20.8957 15.4126 20.8149 15.5916 20.7053C15.7934 20.5816 15.9664 20.4086 16.3123 20.0627L20.0627 16.3123C20.4086 15.9664 20.5816 15.7934 20.7053 15.5916C20.8149 15.4126 20.8957 15.2175 20.9447 15.0135C21 14.7833 21 14.5387 21 14.0495V9.95048C21 9.4613 21 9.21671 20.9447 8.98654C20.8957 8.78246 20.8149 8.58737 20.7053 8.40843C20.5816 8.2066 20.4086 8.03365 20.0627 7.68774L16.3123 3.93726C15.9664 3.59136 15.7934 3.4184 15.5916 3.29472C15.4126 3.18506 15.2175 3.10425 15.0135 3.05526C14.7833 3 14.5387 3 14.0495 3H9.95048C9.4613 3 9.21671 3 8.98654 3.05526C8.78246 3.10425 8.58737 3.18506 8.40843 3.29472C8.2066 3.4184 8.03365 3.59135 7.68774 3.93726ZM12 17V17.01H12.01V17H12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const OptionIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 6.5H7.81273C8.54462 6.5 9.21806 6.89977 9.56852 7.5423L14.4315 16.4577C14.7819 17.1002 15.4554 17.5 16.1873 17.5H21M21 6.5H15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const DownloadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7.5V15V16.5M12 16.5L15 13.5M12 16.5L9 13.5M16.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const UploadIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 16.5V9V7.5M12 7.5L9 10.5M12 7.5L15 10.5M7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const PaperAttechmentHorizontalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6.5999 6.75H16.8599M16.8499 6.75C19.7494 6.75 22.0999 9.10051 22.0999 12C22.0999 14.8995 19.7494 17.25 16.8499 17.25H5.49991C3.51168 17.25 1.89991 15.683 1.89991 13.75C1.89991 11.817 3.51168 10.25 5.49991 10.25L16.5999 10.25C17.6147 10.25 18.4374 11.0335 18.4374 12C18.4374 12.9665 17.6147 13.75 16.5999 13.75H6.5999" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const PaperAttechmentTiltIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.894 4.46932L19.1489 11.7242M19.1418 11.7172C21.1921 13.7674 21.1921 17.0915 19.1418 19.1418C17.0915 21.192 13.7674 21.192 11.7172 19.1418L3.69152 11.1161C2.28564 9.71024 2.25398 7.46251 3.62081 6.09567C4.98765 4.72884 7.23538 4.76049 8.64127 6.16638L16.4901 14.0153C17.2077 14.7328 17.2354 15.8686 16.552 16.552C15.8686 17.2354 14.7329 17.2077 14.0153 16.4901L6.94421 9.41907" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const PaperPlaneIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10.7432 13.2568L3.82282 9.79661C3.4244 9.5974 3.46572 9.01592 3.88832 8.87505L19.7945 3.573C20.1853 3.44271 20.5572 3.81458 20.4269 4.20546L15.1249 20.1116C14.984 20.5342 14.4025 20.5755 14.2033 20.1771L10.7432 13.2568ZM10.7432 13.2568L14.9999 9.00005" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const PauseCircleIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10 15V9M14 15V9M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const PlayCircleIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
    <path d="M10 14.1315V9.86852C10 9.06982 10.8901 8.59343 11.5547 9.03647L14.7519 11.1679C15.3457 11.5638 15.3457 12.4362 14.7519 12.8321L11.5547 14.9635C10.8901 15.4066 10 14.9302 10 14.1315Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const RadioChekedIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.8284 9.17157C16.3905 10.7337 16.3905 13.2663 14.8284 14.8284C13.2663 16.3905 10.7337 16.3905 9.17157 14.8284C7.60948 13.2663 7.60948 10.7337 9.17157 9.17157C10.7337 7.60948 13.2663 7.60948 14.8284 9.17157Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
    <path d="M17.6569 6.34315C20.781 9.46734 20.781 14.5327 17.6569 17.6569C14.5327 20.781 9.46734 20.781 6.34315 17.6569C3.21895 14.5327 3.21895 9.46734 6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const RadioUnchekedIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.6569 6.34315C20.781 9.46734 20.781 14.5327 17.6569 17.6569C14.5327 20.781 9.46734 20.781 6.34315 17.6569C3.21895 14.5327 3.21895 9.46734 6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ReduIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6.54236 6.84315C6.55848 6.82703 6.57466 6.81099 6.59088 6.79504M6.59088 6.79504C7.34453 6.05389 8.20856 5.49225 9.1295 5.11012M6.59088 6.79504C5.11468 8.24639 4.19922 10.2663 4.19922 12.5C4.19922 16.9183 7.78089 20.5 12.1992 20.5C13.2868 20.5 14.3238 20.283 15.2691 19.8898M6.59088 6.79504C7.31585 6.08227 8.17606 5.50662 9.1295 5.11012M9.1295 5.11012C12.0308 3.90627 15.4969 4.48394 17.8561 6.84315L19.0129 8M9.1295 5.11012C10.0748 4.71702 11.1116 4.49999 12.1992 4.49999M19.1992 3.5L19.1992 7.5C19.1992 8.05228 18.7515 8.5 18.1992 8.5L14.1992 8.5M17.856 18.1569C17.8399 18.173 17.8237 18.189 17.8075 18.205M17.8075 18.205C17.0539 18.9461 16.1899 19.5077 15.2691 19.8898M17.8075 18.205C17.0826 18.9177 16.2224 19.4933 15.2691 19.8898M17.8075 18.205C18.7067 17.3209 19.3979 16.2258 19.8008 15M15.2691 19.8898C12.3678 21.0938 8.90156 20.5161 6.54231 18.1569" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const RhombIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2.59319 10.3966L10.6269 2.55886C11.3907 1.81371 12.6093 1.81371 13.3731 2.55886L21.4068 10.3966C22.1843 11.1551 22.1995 12.4003 21.4407 13.1776L13.407 21.4072C12.6355 22.1976 11.3645 22.1976 10.593 21.4072L2.55927 13.1776C1.80053 12.4003 1.81571 11.1551 2.59319 10.3966Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const RhombCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 10L11.5657 13.4343C11.3677 13.6323 11.2687 13.7313 11.1545 13.7684C11.0541 13.8011 10.9459 13.8011 10.8455 13.7684C10.7314 13.7313 10.6323 13.6323 10.4343 13.4343L9 12M10.6269 2.55886L2.59319 10.3966C1.81571 11.1551 1.80053 12.4003 2.55927 13.1776L10.593 21.4072C11.3645 22.1976 12.6355 22.1976 13.407 21.4072L21.4407 13.1776C22.1995 12.4003 22.1843 11.1551 21.4068 10.3966L13.3731 2.55886C12.6093 1.81371 11.3907 1.81371 10.6269 2.55886Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const RhombCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 10L12 12M12 12L10 14M12 12L14 14M12 12L10 10M10.6269 2.55886L2.59319 10.3966C1.81571 11.1551 1.80053 12.4003 2.55927 13.1776L10.593 21.4072C11.3645 22.1976 12.6355 22.1976 13.407 21.4072L21.4407 13.1776C22.1995 12.4003 22.1843 11.1551 21.4068 10.3966L13.3731 2.55886C12.6093 1.81371 11.3907 1.81371 10.6269 2.55886Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const RhombHelpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 9.92837C9 8.31107 10.3431 7 12 7C13.6569 7 15 8.31107 15 9.92837C15 10.4668 14.8511 10.9714 14.5913 11.4048C14.3323 11.837 13.8877 12.1097 13.432 12.3246L12.9045 12.5734C12.3523 12.8338 12 13.3895 12 14M12 17V17.01H12.01V17H12ZM10.6269 2.55886L2.59319 10.3966C1.81571 11.1551 1.80053 12.4003 2.55927 13.1776L10.593 21.4072C11.3645 22.1976 12.6355 22.1976 13.407 21.4072L21.4407 13.1776C22.1995 12.4003 22.1843 11.1551 21.4068 10.3966L13.3731 2.55886C12.6093 1.81371 11.3907 1.81371 10.6269 2.55886Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const RhombMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 12H9M10.6269 2.55886L2.59319 10.3966C1.81571 11.1551 1.80053 12.4003 2.55927 13.1776L10.593 21.4072C11.3645 22.1976 12.6355 22.1976 13.407 21.4072L21.4407 13.1776C22.1995 12.4003 22.1843 11.1551 21.4068 10.3966L13.3731 2.55886C12.6093 1.81371 11.3907 1.81371 10.6269 2.55886Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const RhombPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 9V12M12 12V15M12 12H15M12 12H9M10.6269 2.55886L2.59319 10.3966C1.81571 11.1551 1.80053 12.4003 2.55927 13.1776L10.593 21.4072C11.3645 22.1976 12.6355 22.1976 13.407 21.4072L21.4407 13.1776C22.1995 12.4003 22.1843 11.1551 21.4068 10.3966L13.3731 2.55886C12.6093 1.81371 11.3907 1.81371 10.6269 2.55886Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const RhombWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7V14M12 17V17.01H12.01V17H12ZM10.6269 2.55886L2.59319 10.3966C1.81571 11.1551 1.80053 12.4003 2.55927 13.1776L10.593 21.4072C11.3645 22.1976 12.6355 22.1976 13.407 21.4072L21.4407 13.1776C22.1995 12.4003 22.1843 11.1551 21.4068 10.3966L13.3731 2.55886C12.6093 1.81371 11.3907 1.81371 10.6269 2.55886Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const SearchIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.2133 15.7133L18.5 19M17.5 11C17.5 14.3137 14.8137 17 11.5 17C8.18629 17 5.5 14.3137 5.5 11C5.5 7.68629 8.18629 5 11.5 5C14.8137 5 17.5 7.68629 17.5 11Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const SearchMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 11.5H11.5H9M18.5 18.5L15.7426 15.7426M15.7426 15.7426C16.8284 14.6569 17.5 13.1569 17.5 11.5C17.5 8.18629 14.8137 5.5 11.5 5.5C8.18629 5.5 5.5 8.18629 5.5 11.5C5.5 14.8137 8.18629 17.5 11.5 17.5C13.1569 17.5 14.6569 16.8284 15.7426 15.7426Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const SearchPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.5 9V11.5M11.5 11.5V14M11.5 11.5H14M11.5 11.5H9M18.5 18.5L15.7426 15.7426M15.7426 15.7426C16.8284 14.6569 17.5 13.1569 17.5 11.5C17.5 8.18629 14.8137 5.5 11.5 5.5C8.18629 5.5 5.5 8.18629 5.5 11.5C5.5 14.8137 8.18629 17.5 11.5 17.5C13.1569 17.5 14.6569 16.8284 15.7426 15.7426Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Settings01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.44138 13.4705L3.34226 13.5586C2.59019 14.2268 2.45154 15.3497 3.01849 16.1808L3.99569 17.6133C4.48358 18.3285 5.38275 18.6391 6.20806 18.3775C7.37347 18.0082 8.58905 18.7837 8.74536 19.9962L8.77882 20.2557C8.90741 21.2532 9.7567 22 10.7624 22H12.8262C13.832 22 14.6813 21.253 14.8098 20.2555L14.8372 20.0427C14.9965 18.806 16.258 18.0218 17.4467 18.3985C18.2368 18.6489 19.112 18.3899 19.6282 17.7413L20.8378 16.2214C21.4993 15.3902 21.3774 14.1832 20.5631 13.501C19.6288 12.7184 19.6288 11.2816 20.5631 10.499L20.7036 10.3812C21.4638 9.74442 21.6426 8.64673 21.1238 7.80162L20.112 6.15371C19.6052 5.32823 18.5797 4.98458 17.6778 5.33803L17.529 5.39636C16.3172 5.87127 14.9819 5.08059 14.8156 3.78975L14.8098 3.74451C14.6813 2.74696 13.832 2 12.8262 2H10.7624C9.7567 2 8.90741 2.74683 8.77882 3.74428L8.77223 3.79539C8.60619 5.08341 7.27369 5.87225 6.06458 5.39833C5.09722 5.01916 4.00078 5.44564 3.54387 6.37879L2.78392 7.93083C2.39426 8.72665 2.57469 9.68401 3.22732 10.2834L3.46581 10.5024C4.33835 11.3038 4.32699 12.6837 3.44138 13.4705Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const Settings02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M10.8453 3.31357C11.5598 2.89548 12.4402 2.89548 13.1547 3.31357L18.8453 6.64331C19.5598 7.0614 20 7.83407 20 8.67026V15.3297C20 16.1659 19.5598 16.9386 18.8453 17.3567L13.1547 20.6864C12.4402 21.1045 11.5598 21.1045 10.8453 20.6864L5.1547 17.3567C4.44017 16.9386 4 16.1659 4 15.3297V8.67026C4 7.83407 4.44017 7.0614 5.1547 6.64331L10.8453 3.31357Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const SettingsBig01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.44138 13.4705L3.34226 13.5586C2.59019 14.2268 2.45154 15.3497 3.01849 16.1808L3.99569 17.6133C4.48358 18.3285 5.38275 18.6391 6.20806 18.3775C7.37347 18.0082 8.58905 18.7837 8.74536 19.9962L8.77882 20.2557C8.90741 21.2532 9.7567 22 10.7624 22H12.8262C13.832 22 14.6813 21.253 14.8098 20.2555L14.8372 20.0427C14.9965 18.806 16.258 18.0218 17.4467 18.3985C18.2368 18.6489 19.112 18.3899 19.6282 17.7413L20.8378 16.2214C21.4993 15.3902 21.3774 14.1832 20.5631 13.501C19.6288 12.7184 19.6288 11.2816 20.5631 10.499L20.7036 10.3812C21.4638 9.74442 21.6426 8.64673 21.1238 7.80162L20.112 6.15371C19.6052 5.32823 18.5797 4.98458 17.6778 5.33803L17.529 5.39636C16.3172 5.87127 14.9819 5.08059 14.8156 3.78975L14.8098 3.74451C14.6813 2.74696 13.832 2 12.8262 2H10.7624C9.7567 2 8.90741 2.74683 8.77882 3.74428L8.77223 3.79539C8.60619 5.08341 7.27369 5.87225 6.06458 5.39833C5.09722 5.01916 4.00078 5.44564 3.54387 6.37879L2.78392 7.93083C2.39426 8.72665 2.57469 9.68401 3.22732 10.2834L3.46581 10.5024C4.33835 11.3038 4.32699 12.6837 3.44138 13.4705Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
    <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const SettingsBig02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
    <path d="M10.8453 3.31357C11.5598 2.89548 12.4402 2.89548 13.1547 3.31357L18.8453 6.64331C19.5598 7.0614 20 7.83407 20 8.67026V15.3297C20 16.1659 19.5598 16.9386 18.8453 17.3567L13.1547 20.6864C12.4402 21.1045 11.5598 21.1045 10.8453 20.6864L5.1547 17.3567C4.44017 16.9386 4 16.1659 4 15.3297V8.67026C4 7.83407 4.44017 7.0614 5.1547 6.64331L10.8453 3.31357Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const ShareAndroidIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.3395 16.8624C15.1226 17.2774 15 17.7494 15 18.25C15 19.9069 16.3431 21.25 18 21.25C19.6569 21.25 21 19.9069 21 18.25C21 16.5931 19.6569 15.25 18 15.25C16.8438 15.25 15.8403 15.9041 15.3395 16.8624ZM15.3395 16.8624L8.5 13.75M15.3395 7.13758C15.1226 6.72263 15 6.25063 15 5.75C15 4.09315 16.3431 2.75 18 2.75C19.6569 2.75 21 4.09315 21 5.75C21 7.40685 19.6569 8.75 18 8.75C16.8438 8.75 15.8403 8.09591 15.3395 7.13758ZM15.3395 7.13758L8.5 10.25M9 12.25C9 13.9069 7.65685 15.25 6 15.25C4.34315 15.25 3 13.9069 3 12.25C3 10.5931 4.34315 9.25 6 9.25C7.65685 9.25 9 10.5931 9 12.25Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const ShareIOSIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18 9C19.1046 9 20 9.89543 20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11C4 9.89543 4.89543 9 6 9M12 12V3M12 3L9 6M12 3L15 6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ShieldIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.75 2.99999H5.25001C4.00737 2.99999 3.00001 4.02885 3.00001 5.298V8.13852C3.00001 14.0487 5.98103 17.5419 10.8881 20.6743C11.5684 21.1086 12.4316 21.1086 13.1119 20.6743C18.019 17.5419 21 14.0487 21 8.13852V5.298C21 4.02885 19.9926 2.99999 18.75 2.99999Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShieldCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 9.00001L11.5657 12.4343C11.3677 12.6323 11.2687 12.7313 11.1545 12.7684C11.0541 12.8011 10.9459 12.8011 10.8455 12.7684C10.7313 12.7313 10.6323 12.6323 10.4343 12.4343L8.99999 11M5.25 3H18.75C19.9926 3 21 4.02885 21 5.29801V8.13853C21 14.0487 18.019 17.5419 13.1119 20.6743C12.4316 21.1086 11.5684 21.1086 10.8881 20.6743C5.98103 17.5419 3 14.0487 3 8.13853V5.29801C3 4.02885 4.00736 3 5.25 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShieldCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 9.00001L12 11M12 11L10 13M12 11L14 13M12 11L9.99999 9.00001M5.25 3H18.75C19.9926 3 21 4.02885 21 5.29801V8.13853C21 14.0487 18.019 17.5419 13.1119 20.6743C12.4316 21.1086 11.5684 21.1086 10.8881 20.6743C5.98103 17.5419 3 14.0487 3 8.13853V5.29801C3 4.02885 4.00736 3 5.25 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShieldHelpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.1235 14.3824 11.8728 13.4683 12.2388C12.6992 12.5468 12 13.1716 12 14M5.25 3H18.75C19.9926 3 21 4.02885 21 5.29801V8.13853C21 14.0487 18.019 17.5419 13.1119 20.6743C12.4316 21.1086 11.5684 21.1086 10.8881 20.6743C5.98103 17.5419 3 14.0487 3 8.13853V5.29801C3 4.02885 4.00736 3 5.25 3ZM12 17V17.01H12.01V17H12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ShieldMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 11L8.99999 11M5.25 3H18.75C19.9926 3 21 4.02885 21 5.29801V8.13853C21 14.0487 18.019 17.5419 13.1119 20.6743C12.4316 21.1086 11.5684 21.1086 10.8881 20.6743C5.98103 17.5419 3 14.0487 3 8.13853V5.29801C3 4.02885 4.00736 3 5.25 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShieldPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 8.00001V11M12 11V14M12 11H15M12 11L8.99999 11M5.25 3H18.75C19.9926 3 21 4.02885 21 5.29801V8.13853C21 14.0487 18.019 17.5419 13.1119 20.6743C12.4316 21.1086 11.5684 21.1086 10.8881 20.6743C5.98103 17.5419 3 14.0487 3 8.13853V5.29801C3 4.02885 4.00736 3 5.25 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShieldWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7.00001V14M5.25 3H18.75C19.9926 3 21 4.02885 21 5.29801V8.13853C21 14.0487 18.019 17.5419 13.1119 20.6743C12.4316 21.1086 11.5684 21.1086 10.8881 20.6743C5.98103 17.5419 3 14.0487 3 8.13853V5.29801C3 4.02885 4.00736 3 5.25 3ZM12 17V17.01H12.01V17H12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const ShopingBag01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9M6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V7.2C3 6.0799 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShopingBag02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8.00031 7C8.00031 4.79086 9.79117 3 12.0003 3C14.2094 3 16.0003 4.79086 16.0003 7M6.95867 21H17.0419C18.3967 21 19.074 21 19.5453 20.721C19.9585 20.4763 20.2699 20.0911 20.4226 19.6357C20.5967 19.1165 20.4548 18.4541 20.1709 17.1295L18.5423 9.52951C18.3491 8.62748 18.2524 8.17646 18.0124 7.83955C17.8007 7.54241 17.5118 7.30883 17.1769 7.1641C16.7971 7 16.3359 7 15.4134 7H8.58724C7.66473 7 7.20347 7 6.82375 7.1641C6.48885 7.30883 6.19991 7.54241 5.98822 7.83955C5.74821 8.17646 5.65156 8.62748 5.45827 9.52951L3.8297 17.1295C3.54585 18.4541 3.40392 19.1165 3.57801 19.6357C3.73066 20.0911 4.04208 20.4763 4.45534 20.721C4.92661 21 5.60396 21 6.95867 21Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const ShopingBag03Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M8.00031 7C8.00031 4.79086 9.79117 3 12.0003 3C14.2094 3 16.0003 4.79086 16.0003 7M6.95867 7H17.0419C18.3967 7 19.074 7 19.5453 7.27902C19.9585 7.5237 20.2699 7.90892 20.4226 8.36428C20.5967 8.88354 20.4548 9.54587 20.1709 10.8705L18.5423 18.4705C18.3491 19.3725 18.2524 19.8235 18.0124 20.1604C17.8007 20.4576 17.5118 20.6912 17.1769 20.8359C16.7971 21 16.3359 21 15.4134 21H8.58724C7.66473 21 7.20347 21 6.82375 20.8359C6.48885 20.6912 6.19991 20.4576 5.98822 20.1604C5.74821 19.8235 5.65156 19.3725 5.45827 18.4705L3.8297 10.8705C3.54585 9.54586 3.40392 8.88354 3.57801 8.36428C3.73066 7.90892 4.04208 7.5237 4.45534 7.27902C4.92661 7 5.60396 7 6.95867 7Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const ShopingCartIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.3789 16.5C16.2743 16.5 15.3789 17.3954 15.3789 18.5C15.3789 19.6046 16.2743 20.5 17.3789 20.5C18.4835 20.5 19.3789 19.6046 19.3789 18.5C19.3789 17.3954 18.4835 16.5 17.3789 16.5ZM17.3789 16.5H9.27891L6.12891 6M2.37891 3.5H3.89084C4.77406 3.5 5.55271 4.07934 5.8065 4.9253L6.12891 6M6.12891 6L7.96325 12.0747C8.21704 12.9207 8.99569 13.5 9.87891 13.5H18.2319C19.1067 13.5 19.8799 12.9315 20.1408 12.0965L21.5289 8.59655C21.9314 7.30869 20.9692 6 19.6199 6H6.12891ZM11.3789 18.5C11.3789 19.6046 10.4835 20.5 9.37891 20.5C8.27434 20.5 7.37891 19.6046 7.37891 18.5C7.37891 17.3954 8.27434 16.5 9.37891 16.5C10.4835 16.5 11.3789 17.3954 11.3789 18.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShowIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.9999 12C14.9999 13.6569 13.6568 15 11.9999 15C10.3431 15 8.99992 13.6569 8.99992 12C8.99992 10.3431 10.3431 9 11.9999 9C13.6568 9 14.9999 10.3431 14.9999 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
    <path d="M20.518 11.1217C16.4166 4.29278 7.58325 4.29278 3.48186 11.1217C3.15774 11.6613 3.15774 12.3387 3.48186 12.8784C7.58325 19.7072 16.4166 19.7072 20.518 12.8784C20.8421 12.3387 20.8421 11.6613 20.518 11.1217Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShrinkIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.87845 18.3639L9.87845 14.6213C9.87845 14.3452 9.6546 14.1213 9.37845 14.1213L5.63581 14.1213M18.3637 9.87866H14.6211C14.345 9.87866 14.1211 9.6548 14.1211 9.37866V5.63602" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const ShuffleIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.10352 7H5.10352C8.41722 7 11.1035 9.23858 11.1035 12C11.1035 14.7614 13.7898 17 17.1035 17H20.6035M3.10352 17H5.10352C6.19638 17 7.221 16.7565 8.10352 16.3311M20.6035 7H17.1035C16.0107 7 14.986 7.24349 14.1035 7.66891M18.1035 14L20.75 16.6464C20.9452 16.8417 20.9452 17.1583 20.75 17.3536L18.1035 20M18.1035 4L20.75 6.64645C20.9452 6.84171 20.9452 7.15829 20.75 7.35355L18.1035 10" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Slider01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.5 8.5H9.5M20.5 15.5H14.5M18.5 8.5H20.5M18.5 8.5C18.5 9.88071 17.3807 11 16 11C14.6193 11 13.5 9.88071 13.5 8.5C13.5 7.11929 14.6193 6 16 6C17.3807 6 18.5 7.11929 18.5 8.5ZM5.5 15.5H3.5M5.5 15.5C5.5 16.8807 6.61929 18 8 18C9.38071 18 10.5 16.8807 10.5 15.5C10.5 14.1193 9.38071 13 8 13C6.61929 13 5.5 14.1193 5.5 15.5Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Slider02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M20.5 5H14.5M3.5 12H14.5M20.5 19H12.5M3.5 5H10.5M3.50001 19H8.5M20.5 12H18.5M10.5 3V7M14.5 10V14M8.5 17V21" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Slider03Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M20.5 5H14.5M3.5 12H9.5M20.5 19H14.5M5.5 5L3.5 5M5.5 5C5.5 6.38071 6.61929 7.5 8 7.5C9.38071 7.5 10.5 6.38071 10.5 5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5ZM18.5 12H20.5M18.5 12C18.5 13.3807 17.3807 14.5 16 14.5C14.6193 14.5 13.5 13.3807 13.5 12C13.5 10.6193 14.6193 9.5 16 9.5C17.3807 9.5 18.5 10.6193 18.5 12ZM5.5 19H3.5M5.5 19C5.5 20.3807 6.61929 21.5 8 21.5C9.38071 21.5 10.5 20.3807 10.5 19C10.5 17.6193 9.38071 16.5 8 16.5C6.61929 16.5 5.5 17.6193 5.5 19Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const SquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const SquareCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 10L11.5657 13.4343C11.3677 13.6323 11.2687 13.7313 11.1545 13.7684C11.0541 13.8011 10.9459 13.8011 10.8455 13.7684C10.7314 13.7313 10.6323 13.6323 10.4343 13.4343L9 12M6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const SquareCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 10L12 12M12 12L10 14M12 12L14 14M12 12L10 10M6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const SquareHelpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.1235 14.3824 11.8728 13.4683 12.2388C12.6992 12.5468 12 13.1716 12 14M6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3ZM12 17V17.01H12.01V17H12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const SquareMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 12H9M6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const SquarePlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 9V12M12 12V15M12 12H15M12 12H9M6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const SquareWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7V14M12 17V17.01H12.01V17H12ZM6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const StarIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M11.0814 3.94029C11.4285 3.13432 12.5712 3.13432 12.9183 3.94029L14.7392 8.16856C14.884 8.50473 15.2008 8.73495 15.5653 8.76876L20.1493 9.19391C21.0231 9.27495 21.3762 10.3618 20.7169 10.9409L17.2583 13.9793C16.9833 14.2209 16.8623 14.5934 16.9427 14.9504L17.9549 19.4415C18.1479 20.2975 17.2234 20.9692 16.4688 20.5212L12.5104 18.1707C12.1957 17.9838 11.804 17.9838 11.4893 18.1707L7.53085 20.5212C6.77632 20.9692 5.85182 20.2975 6.04476 19.4415L7.05695 14.9504C7.13743 14.5934 7.01639 14.2209 6.74141 13.9793L3.28277 10.9409C2.62351 10.3618 2.97663 9.27495 3.8504 9.19391L8.43441 8.76876C8.79887 8.73495 9.11574 8.50473 9.26051 8.16856L11.0814 3.94029Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const StopIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const StopCircleIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
    <path d="M14 9H10C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const StopwatchIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.71973 1.5L13.7197 1.5M19.2804 3.5L21.2804 5.5M18.0837 19.864C21.5984 16.3492 21.5984 10.6508 18.0837 7.13604C14.569 3.62132 8.87048 3.62132 5.35577 7.13604C1.84105 10.6508 1.84105 16.3492 5.35577 19.864C8.87048 23.3787 14.569 23.3787 18.0837 19.864Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const StopwatchCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.71973 1.5L13.7197 1.5M19.2804 3.5L21.2804 5.5M8.71973 13.5L10.7197 15.5L14.7197 11.5M18.0837 19.864C21.5984 16.3492 21.5984 10.6508 18.0837 7.13604C14.569 3.62132 8.87048 3.62132 5.35577 7.13604C1.84105 10.6508 1.84105 16.3492 5.35577 19.864C8.87048 23.3787 14.569 23.3787 18.0837 19.864Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const StopwatchCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.71973 1.5L13.7197 1.5M19.2804 3.5L21.2804 5.5M9.71973 11.5L11.7197 13.5M11.7197 13.5L13.7197 15.5M11.7197 13.5L13.7197 11.5M11.7197 13.5L9.71973 15.5M18.0837 19.864C21.5984 16.3492 21.5984 10.6508 18.0837 7.13604C14.569 3.62132 8.87048 3.62132 5.35577 7.13604C1.84105 10.6508 1.84105 16.3492 5.35577 19.864C8.87048 23.3787 14.569 23.3787 18.0837 19.864Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const StopwatchMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.71973 1.5L13.7197 1.5M19.2804 3.5L21.2804 5.5M8.71973 13.5H14.7197M18.0837 19.864C21.5984 16.3492 21.5984 10.6508 18.0837 7.13604C14.569 3.62132 8.87048 3.62132 5.35577 7.13604C1.84105 10.6508 1.84105 16.3492 5.35577 19.864C8.87048 23.3787 14.569 23.3787 18.0837 19.864Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const StopwatchPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.71973 1.5L13.7197 1.5M19.2804 3.5L21.2804 5.5M11.7197 10.5V13.5M11.7197 13.5V16.5M11.7197 13.5H14.7197M11.7197 13.5H8.71973M18.0837 19.864C21.5984 16.3492 21.5984 10.6508 18.0837 7.13604C14.569 3.62132 8.87048 3.62132 5.35577 7.13604C1.84105 10.6508 1.84105 16.3492 5.35577 19.864C8.87048 23.3787 14.569 23.3787 18.0837 19.864Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const SuitcaseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9M6 9H18C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const TextAlignCenterIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 6H19M8 10H16M5 14H19M8 18H16" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const TextAlignJustifyIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 18H19M5 14H19M5 10H19M5 6H19" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const TextAlignLeftIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M5 6H19M5 10H14M5 14H19M5 18H14" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const TextAlignRightIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19 6H5M19 10H10M19 14H5M19 18H10" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const TicketVoucherIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14 18H19C20.1046 18 21 17.1046 21 16V15.5C21 15.2239 20.7745 15.0044 20.5021 14.9589C19.0822 14.7217 18 13.4872 18 12C18 10.5128 19.0822 9.2783 20.5021 9.04113C20.7745 8.99563 21 8.77614 21 8.5V8C21 6.89543 20.1046 6 19 6H14M14 18H5C3.89543 18 3 17.1046 3 16V15.5C3 15.2239 3.22554 15.0044 3.49791 14.9589C4.91779 14.7217 6 13.4872 6 12C6 10.5128 4.91779 9.2783 3.49791 9.04113C3.22554 8.99563 3 8.77614 3 8.5V8C3 6.89543 3.89543 6 5 6H14M14 18V6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const Trash01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6.5 6.5V18.5C6.5 19.6046 7.39543 20.5 8.5 20.5H15.5C16.6046 20.5 17.5 19.6046 17.5 18.5V6.5M6.5 6.5H4.5M6.5 6.5H17.5M17.5 6.5H19.5M9 6.5V5.5C9 4.39543 9.89543 3.5 11 3.5H13C14.1046 3.5 15 4.39543 15 5.5V6.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const Trash02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6.5 6.5V18.5C6.5 19.6046 7.39543 20.5 8.5 20.5H15.5C16.6046 20.5 17.5 19.6046 17.5 18.5V6.5M6.5 6.5H4.5M6.5 6.5H17.5M17.5 6.5H19.5M9 6.5V5.5C9 4.39543 9.89543 3.5 11 3.5H13C14.1046 3.5 15 4.39543 15 5.5V6.5M10 9.5V17.5M14 9.5V17.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UndoIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.3661 6.84315C17.35 6.82703 17.3338 6.81099 17.3176 6.79504M17.3176 6.79504C16.5639 6.05389 15.6999 5.49225 14.779 5.11012M17.3176 6.79504C18.7938 8.24639 19.7092 10.2663 19.7092 12.5C19.7092 16.9183 16.1276 20.5 11.7093 20.5C10.6216 20.5 9.58468 20.283 8.63938 19.8898M17.3176 6.79504C16.5926 6.08227 15.7324 5.50662 14.779 5.11012M14.779 5.11012C11.8777 3.90627 8.41157 4.48394 6.05237 6.84315L4.89552 8M14.779 5.11012C13.8337 4.71702 12.7968 4.49999 11.7092 4.49999M4.70922 3.5L4.70922 7.5C4.70922 8.05228 5.15694 8.5 5.70922 8.5L9.70922 8.5M6.05242 18.1569C6.06854 18.173 6.08471 18.189 6.10093 18.205M6.10093 18.205C6.85454 18.9461 7.7185 19.5077 8.63938 19.8898M6.10093 18.205C6.82586 18.9177 7.68601 19.4933 8.63938 19.8898M6.10093 18.205C5.32586 17.4429 4.70536 16.5242 4.29079 15.5M8.63938 19.8898C11.5407 21.0938 15.0069 20.5161 17.3661 18.1569" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UnfoldLessVerticalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 18L12.3536 15.3536C12.1583 15.1583 11.8417 15.1583 11.6464 15.3536L9 18M15 6L12.3536 8.64645C12.1583 8.84171 11.8417 8.84171 11.6464 8.64645L9 6" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UnfoldMoreVerticalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 9L12.3536 6.35355C12.1583 6.15829 11.8417 6.15829 11.6464 6.35355L9 9M9 15L11.6464 17.6464C11.8417 17.8417 12.1583 17.8417 12.3536 17.6464L15 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UnformLessHorizontalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 15L8.64645 12.3536C8.84171 12.1583 8.84171 11.8417 8.64645 11.6464L6 9M18 15L15.3536 12.3536C15.1583 12.1583 15.1583 11.8417 15.3536 11.6464L18 9" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UnformMoreHorizontalIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M14.9999 15L17.6464 12.3536C17.8416 12.1583 17.8416 11.8417 17.6464 11.6464L14.9999 9M8.99992 9L6.35348 11.6464C6.15822 11.8417 6.15822 12.1583 6.35348 12.3536L8.99992 15" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UnlockIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7 10.2676C7 7.50614 9.23858 5 12 5C13.3336 5 14.5453 5.58451 15.4417 6.5M6 12V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V12C18 10.8954 17.1046 10 16 10H8C6.89543 10 6 10.8954 6 12Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const User01Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 21C6 15.4999 18 15.4999 18 21M17 8.00002C17 10.7615 14.7615 13.0001 12 13.0001C9.23861 13.0001 7.00003 10.7615 7.00003 8.00002C7.00003 5.23858 9.23861 2.99998 12 2.99998C14.7615 2.99998 17 5.23858 17 8.00002Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const User02Icon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6 21C6 13 18 13 18 21M16 6.99998C16 9.20912 14.2091 11 12 11C9.79086 11 8 9.20912 8 6.99998C8 4.79085 9.79086 2.99998 12 2.99998C14.2091 2.99998 16 4.79085 16 6.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UserCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15.5 14L17.1464 15.6464C17.3417 15.8417 17.6583 15.8417 17.8536 15.6464L21.5 12M2.5 21C2.5 15.5 14.5 15.5 14.5 21M13.5 7.99998C13.5 10.7614 11.2615 13 8.50003 13C5.73861 13 3.50003 10.7614 3.50003 7.99998C3.50003 5.23856 5.73861 2.99998 8.50003 2.99998C11.2615 2.99998 13.5 5.23856 13.5 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UserCircleIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M7.00548 19.4881C8.43449 20.4432 10.1522 21 12 21C13.8478 21 15.5655 20.4432 16.9945 19.4881M7.00548 19.4881C4.59043 17.8741 3 15.1228 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 15.1228 19.4096 17.8741 16.9945 19.4881M7.00548 19.4881C9.267 16.1706 14.733 16.1706 16.9945 19.4881M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const UserCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3.5 21C3.5 15.5 15.5 15.5 15.5 21M16.5 12L18.5 14M18.5 14L20.5 16M18.5 14L16.5 16M18.5 14L20.5 12M14.5 7.99998C14.5 10.7614 12.2615 13 9.50003 13C6.73861 13 4.50003 10.7614 4.50003 7.99998C4.50003 5.23856 6.73861 2.99998 9.50003 2.99998C12.2615 2.99998 14.5 5.23856 14.5 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const UserDownIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 21C3 15.4999 15 15.4999 15 21M19 9.99998V16M19 16L17 14M19 16L21 14M14 8.00002C14 10.7615 11.7615 13.0001 9.00003 13.0001C6.23861 13.0001 4.00003 10.7615 4.00003 8.00002C4.00003 5.23858 6.23861 2.99998 9.00003 2.99998C11.7615 2.99998 14 5.23858 14 8.00002Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const UserGroupIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 21C3 15.5 15 15.5 15 21M17 16.9858C19.2031 17.467 21 18.7717 21 20.9M16 13C17.7659 12.2284 19 9.9503 19 7.89998C19 5.84966 17.7659 3.77154 16 2.99998M14 7.99998C14 10.7614 11.7615 13 9.00003 13C6.23861 13 4.00003 10.7614 4.00003 7.99998C4.00003 5.23856 6.23861 2.99998 9.00003 2.99998C11.7615 2.99998 14 5.23856 14 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UserMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2 21C2 15.5 14 15.5 14 21M16 15H22M13 7.99998C13 10.7614 10.7615 13 8.00003 13C5.23861 13 3.00003 10.7614 3.00003 7.99998C3.00003 5.23856 5.23861 2.99998 8.00003 2.99998C10.7615 2.99998 13 5.23856 13 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UserPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2 21C2 15.5 14 15.5 14 21M16 15H22M19 12V18M13 7.99998C13 10.7614 10.7615 13 8.00003 13C5.23861 13 3.00003 10.7614 3.00003 7.99998C3.00003 5.23856 5.23861 2.99998 8.00003 2.99998C10.7615 2.99998 13 5.23856 13 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const UserSquareIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.7157 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H6.28454M17.7157 21C16.0828 15.6666 7.91759 15.6666 6.28454 21M17.7157 21H6.28454M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} />
  </svg>

)

export const UserUpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M3 21C3 15.5 15 15.5 15 21M19 15V8.99998M19 8.99998L17 11M19 8.99998L21 11M14 7.99998C14 10.7614 11.7615 13 9.00003 13C6.23861 13 4.00003 10.7614 4.00003 7.99998C4.00003 5.23856 6.23861 2.99998 9.00003 2.99998C11.7615 2.99998 14 5.23856 14 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const UserVoiceIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M2.62109 21C2.62109 15.5 14.6211 15.5 14.6211 21M19.6211 2.99998C21.9642 5.34313 21.9642 10.6568 19.6211 13M16.6211 4.99998C17.9642 6.34313 17.9642 9.65684 16.6211 11M13.6211 7.99998C13.6211 10.7614 11.3825 13 8.62112 13C5.8597 13 3.62112 10.7614 3.62112 7.99998C3.62112 5.23856 5.8597 2.99998 8.62112 2.99998C11.3825 2.99998 13.6211 5.23856 13.6211 7.99998Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const VolumCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.3181 9.87871L19.4395 12M19.4395 12L21.5608 14.1213M19.4395 12L21.5608 9.87871M19.4395 12L17.3181 14.1213M12.4395 7.45377V16.5C12.4395 17.3284 11.7679 18 10.9395 18C10.6149 18 10.2991 17.8947 10.0395 17.7L6.97279 15.4C6.62659 15.1404 6.20553 15 5.77279 15H4.43945C3.33488 15 2.43945 14.1046 2.43945 13V11.5C2.43945 10.3954 3.33488 9.5 4.43945 9.5H5.68798C6.17243 9.5 6.64041 9.32416 7.00499 9.00515L10.0284 6.3597C10.2934 6.12781 10.6335 6 10.9857 6C11.7886 6 12.4395 6.65087 12.4395 7.45377Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const VolumMaxIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19.1213 7C21.4645 9.34315 21.4645 14.6569 19.1213 17M16.1213 9C17.4645 10.3431 17.4645 13.6569 16.1213 15M13.1213 7.45377V16.5C13.1213 17.3284 12.4498 18 11.6213 18C11.2968 18 10.981 17.8947 10.7213 17.7L7.65467 15.4C7.30848 15.1404 6.88741 15 6.45467 15H5.12134C4.01677 15 3.12134 14.1046 3.12134 13V11.5C3.12134 10.3954 4.01677 9.5 5.12134 9.5H6.36987C6.85431 9.5 7.32229 9.32416 7.68688 9.00515L10.7103 6.3597C10.9753 6.12781 11.3154 6 11.6676 6C12.4705 6 13.1213 6.65087 13.1213 7.45377Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const VolumMinIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M17.9963 9C19.3395 10.3431 19.3395 13.6569 17.9963 15M14.9963 7.45377V16.5C14.9963 17.3284 14.3248 18 13.4963 18C13.1718 18 12.856 17.8947 12.5963 17.7L9.52967 15.4C9.18348 15.1404 8.76241 15 8.32967 15H6.99634C5.89177 15 4.99634 14.1046 4.99634 13V11.5C4.99634 10.3954 5.89177 9.5 6.99634 9.5H8.24487C8.72931 9.5 9.19729 9.32416 9.56188 9.00515L12.5853 6.3597C12.8503 6.12781 13.1904 6 13.5426 6C14.3455 6 14.9963 6.65087 14.9963 7.45377Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const VolumMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 12H22M12 7.45377V16.5C12 17.3284 11.3284 18 10.5 18C10.1754 18 9.85964 17.8947 9.6 17.7L6.53333 15.4C6.18714 15.1404 5.76607 15 5.33333 15H4C2.89543 15 2 14.1046 2 13V11.5C2 10.3954 2.89543 9.5 4 9.5H5.24853C5.73298 9.5 6.20096 9.32416 6.56554 9.00515L9.58892 6.3597C9.85393 6.12781 10.1941 6 10.5462 6C11.3491 6 12 6.65087 12 7.45377Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const VolumOffIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9.5 9.5H8C6.89543 9.5 6 10.3954 6 11.5V13C6 14.1046 6.89543 15 8 15H9.33333C9.76607 15 10.1871 15.1404 10.5333 15.4L13.6 17.7C13.8596 17.8947 14.1754 18 14.5 18C15.3284 18 16 17.3284 16 16.5M9.5 9.5L5 5M9.5 9.5L19 19M12 7.5L13.5889 6.3597C13.8539 6.12781 14.1941 6 14.5462 6C15.3491 6 16 6.65087 16 7.45377V11.5" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const VolumPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M16 12H22M19 9V15M12 7.45377V16.5C12 17.3284 11.3284 18 10.5 18C10.1754 18 9.85964 17.8947 9.6 17.7L6.53333 15.4C6.18714 15.1404 5.76607 15 5.33333 15H4C2.89543 15 2 14.1046 2 13V11.5C2 10.3954 2.89543 9.5 4 9.5H5.24853C5.73298 9.5 6.20096 9.32416 6.56554 9.00515L9.58892 6.3597C9.85393 6.12781 10.1941 6 10.5462 6C11.3491 6 12 6.65087 12 7.45377Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" />
  </svg>

)

export const WavyIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M19.067 7.83251V7.02693C19.067 5.87049 18.1295 4.93301 16.9731 4.93301H16.1675C15.7541 4.93301 15.3499 4.81064 15.006 4.58133L13.1615 3.35167C12.4582 2.88278 11.5418 2.88278 10.8385 3.35167L8.99401 4.58133C8.65005 4.81064 8.24591 4.93301 7.83251 4.93301H7.02693C5.87049 4.93301 4.93301 5.87049 4.93301 7.02693V7.83251C4.93301 8.24591 4.81064 8.65005 4.58133 8.99401L3.35167 10.8385C2.88278 11.5418 2.88278 12.4582 3.35167 13.1615L4.58133 15.006C4.81064 15.3499 4.93301 15.7541 4.93301 16.1675V16.9731C4.93301 18.1295 5.87049 19.067 7.02693 19.067H7.83251C8.24591 19.067 8.65005 19.1894 8.99401 19.4187L10.8385 20.6483C11.5418 21.1172 12.4582 21.1172 13.1615 20.6483L15.006 19.4187C15.3499 19.1894 15.7541 19.067 16.1675 19.067H16.9731C18.1295 19.067 19.067 18.1295 19.067 16.9731V16.1675C19.067 15.7541 19.1894 15.3499 19.4187 15.006L20.6483 13.1615C21.1172 12.4582 21.1172 11.5418 20.6483 10.8385L19.4187 8.99401C19.1894 8.65005 19.067 8.24591 19.067 7.83251Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" />
  </svg>

)

export const WavyCloseIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 12L14 10M12 12L14 14M12 12L10 14M12 12L10 10M19.067 7.02693V7.83251C19.067 8.24591 19.1894 8.65005 19.4187 8.99401L20.6483 10.8385C21.1172 11.5418 21.1172 12.4582 20.6483 13.1615L19.4187 15.006C19.1894 15.35 19.067 15.7541 19.067 16.1675V16.9731C19.067 18.1295 18.1295 19.067 16.9731 19.067H16.1675C15.7541 19.067 15.35 19.1894 15.006 19.4187L13.1615 20.6483C12.4582 21.1172 11.5418 21.1172 10.8385 20.6483L8.99401 19.4187C8.65005 19.1894 8.24591 19.067 7.83251 19.067H7.02693C5.87049 19.067 4.93301 18.1295 4.93301 16.9731V16.1675C4.93301 15.7541 4.81064 15.35 4.58133 15.006L3.35167 13.1615C2.88278 12.4582 2.88278 11.5418 3.35167 10.8385L4.58133 8.99401C4.81064 8.65005 4.93301 8.24591 4.93301 7.83251V7.02693C4.93301 5.87049 5.87049 4.93301 7.02693 4.93301H7.83251C8.24591 4.93301 8.65005 4.81064 8.99401 4.58133L10.8385 3.35167C11.5418 2.88278 12.4582 2.88278 13.1615 3.35167L15.006 4.58133C15.35 4.81064 15.7541 4.93301 16.1675 4.93301H16.9731C18.1295 4.93301 19.067 5.87049 19.067 7.02693Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const WavyHelpIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M9 9.92837C9 8.31107 10.3431 7 12 7C13.6569 7 15 8.31107 15 9.92837C15 10.4668 14.8511 10.9714 14.5913 11.4048C14.3323 11.837 13.8877 12.1097 13.432 12.3246L12.9045 12.5734C12.3523 12.8338 12 13.3895 12 14M12 17V17.01H12.01V17H12ZM19.067 7.02693V7.83251C19.067 8.24591 19.1894 8.65005 19.4187 8.99401L20.6483 10.8385C21.1172 11.5418 21.1172 12.4582 20.6483 13.1615L19.4187 15.006C19.1894 15.35 19.067 15.7541 19.067 16.1675V16.9731C19.067 18.1295 18.1295 19.067 16.9731 19.067H16.1675C15.7541 19.067 15.35 19.1894 15.006 19.4187L13.1615 20.6483C12.4582 21.1172 11.5418 21.1172 10.8385 20.6483L8.99401 19.4187C8.65005 19.1894 8.24591 19.067 7.83251 19.067H7.02693C5.87049 19.067 4.93301 18.1295 4.93301 16.9731V16.1675C4.93301 15.7541 4.81064 15.35 4.58133 15.006L3.35167 13.1615C2.88278 12.4582 2.88278 11.5418 3.35167 10.8385L4.58133 8.99401C4.81064 8.65005 4.93301 8.24591 4.93301 7.83251V7.02693C4.93301 5.87049 5.87049 4.93301 7.02693 4.93301H7.83251C8.24591 4.93301 8.65005 4.81064 8.99401 4.58133L10.8385 3.35167C11.5418 2.88278 12.4582 2.88278 13.1615 3.35167L15.006 4.58133C15.35 4.81064 15.7541 4.93301 16.1675 4.93301H16.9731C18.1295 4.93301 19.067 5.87049 19.067 7.02693Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const WavyMinusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 12H9M19.067 7.02693V7.83251C19.067 8.24591 19.1894 8.65005 19.4187 8.99401L20.6483 10.8385C21.1172 11.5418 21.1172 12.4582 20.6483 13.1615L19.4187 15.006C19.1894 15.35 19.067 15.7541 19.067 16.1675V16.9731C19.067 18.1295 18.1295 19.067 16.9731 19.067H16.1675C15.7541 19.067 15.35 19.1894 15.006 19.4187L13.1615 20.6483C12.4582 21.1172 11.5418 21.1172 10.8385 20.6483L8.99401 19.4187C8.65005 19.1894 8.24591 19.067 7.83251 19.067H7.02693C5.87049 19.067 4.93301 18.1295 4.93301 16.9731V16.1675C4.93301 15.7541 4.81064 15.35 4.58133 15.006L3.35167 13.1615C2.88278 12.4582 2.88278 11.5418 3.35167 10.8385L4.58133 8.99401C4.81064 8.65005 4.93301 8.24591 4.93301 7.83251V7.02693C4.93301 5.87049 5.87049 4.93301 7.02693 4.93301H7.83251C8.24591 4.93301 8.65005 4.81064 8.99401 4.58133L10.8385 3.35167C11.5418 2.88278 12.4582 2.88278 13.1615 3.35167L15.006 4.58133C15.35 4.81064 15.7541 4.93301 16.1675 4.93301H16.9731C18.1295 4.93301 19.067 5.87049 19.067 7.02693Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const WavyPlusIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 12V9M12 12H15M12 12V15M12 12H9M19.067 7.02693V7.83251C19.067 8.24591 19.1894 8.65005 19.4187 8.99401L20.6483 10.8385C21.1172 11.5418 21.1172 12.4582 20.6483 13.1615L19.4187 15.006C19.1894 15.35 19.067 15.7541 19.067 16.1675V16.9731C19.067 18.1295 18.1295 19.067 16.9731 19.067H16.1675C15.7541 19.067 15.35 19.1894 15.006 19.4187L13.1615 20.6483C12.4582 21.1172 11.5418 21.1172 10.8385 20.6483L8.99401 19.4187C8.65005 19.1894 8.24591 19.067 7.83251 19.067H7.02693C5.87049 19.067 4.93301 18.1295 4.93301 16.9731V16.1675C4.93301 15.7541 4.81064 15.35 4.58133 15.006L3.35167 13.1615C2.88278 12.4582 2.88278 11.5418 3.35167 10.8385L4.58133 8.99401C4.81064 8.65005 4.93301 8.24591 4.93301 7.83251V7.02693C4.93301 5.87049 5.87049 4.93301 7.02693 4.93301H7.83251C8.24591 4.93301 8.65005 4.81064 8.99401 4.58133L10.8385 3.35167C11.5418 2.88278 12.4582 2.88278 13.1615 3.35167L15.006 4.58133C15.35 4.81064 15.7541 4.93301 16.1675 4.93301H16.9731C18.1295 4.93301 19.067 5.87049 19.067 7.02693Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const WavyWarningIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M12 7V14M12 17V17.01H12.01V17H12ZM19.067 7.02693V7.83251C19.067 8.24591 19.1894 8.65005 19.4187 8.99401L20.6483 10.8385C21.1172 11.5418 21.1172 12.4582 20.6483 13.1615L19.4187 15.006C19.1894 15.35 19.067 15.7541 19.067 16.1675V16.9731C19.067 18.1295 18.1295 19.067 16.9731 19.067H16.1675C15.7541 19.067 15.35 19.1894 15.006 19.4187L13.1615 20.6483C12.4582 21.1172 11.5418 21.1172 10.8385 20.6483L8.99401 19.4187C8.65005 19.1894 8.24591 19.067 7.83251 19.067H7.02693C5.87049 19.067 4.93301 18.1295 4.93301 16.9731V16.1675C4.93301 15.7541 4.81064 15.35 4.58133 15.006L3.35167 13.1615C2.88278 12.4582 2.88278 11.5418 3.35167 10.8385L4.58133 8.99401C4.81064 8.65005 4.93301 8.24591 4.93301 7.83251V7.02693C4.93301 5.87049 5.87049 4.93301 7.02693 4.93301H7.83251C8.24591 4.93301 8.65005 4.81064 8.99401 4.58133L10.8385 3.35167C11.5418 2.88278 12.4582 2.88278 13.1615 3.35167L15.006 4.58133C15.35 4.81064 15.7541 4.93301 16.1675 4.93301H16.9731C18.1295 4.93301 19.067 5.87049 19.067 7.02693Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

export const WawyCheckIcon: React.FC<IconSvgProps> = ({ ...props }) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M15 10L11.5657 13.4343C11.3677 13.6323 11.2687 13.7313 11.1545 13.7684C11.0541 13.8011 10.9459 13.8011 10.8455 13.7684C10.7314 13.7313 10.6323 13.6323 10.4343 13.4343L9 12M19.067 7.02693V7.83251C19.067 8.24591 19.1894 8.65005 19.4187 8.99401L20.6483 10.8385C21.1172 11.5418 21.1172 12.4582 20.6483 13.1615L19.4187 15.006C19.1894 15.35 19.067 15.7541 19.067 16.1675V16.9731C19.067 18.1295 18.1295 19.067 16.9731 19.067H16.1675C15.7541 19.067 15.35 19.1894 15.006 19.4187L13.1615 20.6483C12.4582 21.1172 11.5418 21.1172 10.8385 20.6483L8.99401 19.4187C8.65005 19.1894 8.24591 19.067 7.83251 19.067H7.02693C5.87049 19.067 4.93301 18.1295 4.93301 16.9731V16.1675C4.93301 15.7541 4.81064 15.35 4.58133 15.006L3.35167 13.1615C2.88278 12.4582 2.88278 11.5418 3.35167 10.8385L4.58133 8.99401C4.81064 8.65005 4.93301 8.24591 4.93301 7.83251V7.02693C4.93301 5.87049 5.87049 4.93301 7.02693 4.93301H7.83251C8.24591 4.93301 8.65005 4.81064 8.99401 4.58133L10.8385 3.35167C11.5418 2.88278 12.4582 2.88278 13.1615 3.35167L15.006 4.58133C15.35 4.81064 15.7541 4.93301 16.1675 4.93301H16.9731C18.1295 4.93301 19.067 5.87049 19.067 7.02693Z" stroke={props.stroke || 'black'} strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)
