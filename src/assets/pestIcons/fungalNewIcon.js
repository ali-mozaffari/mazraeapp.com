
export const FungalNewIcon= (props) => {
    if(!props.active){
        return (
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5625 29.79H3.08996C2.47642 29.7964 1.87662 29.6083 1.37669 29.2525C0.87677 28.8968 0.502441 28.3918 0.307462 27.81C0.140368 27.4066 0.0593933 26.9727 0.0697255 26.5362C0.0800577 26.0996 0.181469 25.6701 0.367462 25.275C0.568537 24.8663 0.85239 24.504 1.201 24.2109C1.5496 23.9178 1.95535 23.7004 2.39246 23.5725C2.63996 23.4975 2.89496 23.4375 3.14246 23.3775H3.26246C2.93079 21.5568 3.17186 19.678 3.95246 18C4.23204 17.4006 4.38807 16.751 4.41127 16.09C4.43446 15.429 4.32434 14.77 4.08746 14.1525L3.58496 14.25C3.01281 14.3624 2.44701 14.5051 1.88996 14.6775C1.73355 14.7495 1.5634 14.7868 1.39121 14.7868C1.21902 14.7868 1.04887 14.7495 0.892462 14.6775C0.74878 14.5809 0.627538 14.4546 0.536956 14.3071C0.446374 14.1596 0.38857 13.9943 0.367462 13.8225C-0.292538 10.6575 0.262462 8.175 2.06246 6.2475C2.26314 6.06737 2.50406 5.93796 2.76504 5.8701C3.02602 5.80225 3.29947 5.79793 3.56246 5.8575C6.15746 6.75 7.81496 8.6775 8.62496 11.7375C8.68355 11.9035 8.70713 12.0798 8.69422 12.2553C8.68131 12.4309 8.63219 12.6019 8.54996 12.7575C8.43204 12.9029 8.28649 13.0234 8.12172 13.1123C7.95695 13.2011 7.77622 13.2564 7.58996 13.275C7.13996 13.3575 6.68996 13.485 6.20246 13.62L5.77496 13.7325C6.2105 15.8889 5.92593 18.1286 4.96496 20.1075C4.84227 20.4714 4.76666 20.8494 4.73996 21.2325C4.61996 22.2075 4.68746 22.7325 4.94246 23.0325C5.19746 23.3325 5.69246 23.445 6.61496 23.445H8.24996C8.51996 23.445 9.16496 23.445 9.29246 23.2875C9.41996 23.13 9.29246 22.62 9.19496 22.1025C9.02291 21.1349 8.94754 20.1525 8.96996 19.17V18.75C8.96996 18.4425 9.27746 18.2475 9.82496 18L9.96746 17.94L10.1175 18.0225C10.3266 18.2124 10.4621 18.47 10.5 18.75C10.605 19.995 10.695 21.2325 10.785 22.5375L10.845 23.43H11.6475C12.4503 23.4709 13.2551 23.4508 14.055 23.37C14.2107 23.3134 14.3524 23.2238 14.4702 23.1073C14.588 22.9908 14.6792 22.8501 14.7375 22.695L14.775 22.0125C14.9031 20.8201 14.8398 19.6149 14.5875 18.4425C14.49 18.105 14.385 17.7675 14.28 17.43C13.5975 15.18 12.8925 12.8775 13.6275 10.29H13.095C12.4222 10.3296 11.7473 10.3121 11.0775 10.2375C10.5975 10.17 9.90746 9.555 9.89996 9.075C9.86246 5.325 11.1225 2.5725 13.7475 0.637496C14.0768 0.329042 14.5112 0.15741 14.9625 0.15741C15.4137 0.15741 15.8481 0.329042 16.1775 0.637496C18.825 2.5875 20.1 5.34 20.055 9.06C19.9995 9.34566 19.8645 9.60986 19.6654 9.82215C19.4664 10.0345 19.2115 10.1862 18.93 10.26C17.999 10.3729 17.0586 10.3855 16.125 10.2975C15.525 10.26 15.2925 10.4475 15.12 11.1375C14.7358 12.8306 14.9149 14.6029 15.63 16.185C16.6769 18.4192 16.9232 20.9456 16.3275 23.34H19.5L19.56 22.4925C19.65 21.2775 19.74 20.055 19.8525 18.8325C19.8939 18.6099 20.0072 18.407 20.175 18.255C20.22 18.2025 20.265 18.1575 20.3025 18.105L20.4825 17.85L20.73 18.0375L20.9175 18.15C21.135 18.2775 21.39 18.42 21.4125 18.6825C21.5105 19.5439 21.5331 20.4122 21.48 21.2775C21.4223 21.8325 21.3195 22.3818 21.1725 22.92C21.1275 23.085 21.0825 23.2575 21.045 23.4375H21.84C22.8075 23.4375 23.715 23.4375 24.6 23.3925C24.8168 23.2843 24.9892 23.104 25.0875 22.8825V22.3875C25.108 21.3021 24.9768 20.2191 24.6975 19.17C24.04 17.4483 23.8916 15.5737 24.27 13.77L23.865 13.65C23.355 13.5 22.8675 13.3575 22.365 13.26C22.1886 13.2398 22.0183 13.1834 21.8647 13.0944C21.7112 13.0053 21.5776 12.8855 21.4725 12.7425C21.3913 12.5768 21.3441 12.3965 21.3338 12.2123C21.3235 12.0281 21.3503 11.8437 21.4125 11.67C22.23 8.67 23.8575 6.7575 26.3925 5.8725C26.6562 5.79589 26.9347 5.78453 27.2038 5.83941C27.473 5.89428 27.7247 6.01374 27.9375 6.1875C29.82 8.19 30.3825 10.6875 29.6625 13.875C29.6386 14.0342 29.5815 14.1865 29.495 14.3222C29.4084 14.4579 29.2943 14.5738 29.16 14.6625C28.9931 14.735 28.8131 14.7723 28.6312 14.7723C28.4493 14.7723 28.2693 14.735 28.1025 14.6625C27.5775 14.4975 27.0375 14.3775 26.4675 14.2575L25.9725 14.1525C25.4025 15.495 25.74 16.74 26.1 18.06L26.175 18.345C26.4825 19.5 26.67 20.6925 26.8575 21.8475C26.94 22.3575 27.0225 22.8675 27.12 23.3475V23.415C27.315 23.4675 27.5175 23.52 27.7125 23.5875C28.3879 23.7867 28.9768 24.2069 29.3848 24.7809C29.7928 25.3548 29.9963 26.0491 29.9625 26.7525C29.9474 27.4837 29.6741 28.1861 29.191 28.7352C28.7078 29.2842 28.0459 29.6446 27.3225 29.7525C27.2214 29.7759 27.1185 29.7909 27.015 29.7975H12.5625V29.79ZM4.43246 13.4175L4.53746 13.6425C4.86055 14.3565 5.02767 15.1313 5.02767 15.915C5.02767 16.6987 4.86055 17.4735 4.53746 18.1875C3.76819 19.844 3.57035 21.709 3.97496 23.49L4.05746 23.7975L3.30746 23.97C3.04496 24.03 2.80496 24.0825 2.55746 24.1575C2.20021 24.2592 1.86818 24.4345 1.58272 24.6721C1.29726 24.9098 1.0647 25.2046 0.899962 25.5375C0.749733 25.8553 0.668088 26.2012 0.660335 26.5527C0.652582 26.9042 0.718895 27.2533 0.854962 27.5775C1.00922 28.0498 1.31117 28.46 1.71628 28.7476C2.1214 29.0353 2.60823 29.1851 3.10496 29.175C9.44996 29.175 15.7925 29.175 22.1325 29.175H27H27.1125H27.2025C27.7856 29.0891 28.32 28.8008 28.7121 28.3607C29.1042 27.9206 29.3291 27.3567 29.3475 26.7675C29.37 26.1995 29.2032 25.6401 28.8734 25.1772C28.5435 24.7143 28.0692 24.3741 27.525 24.21C27.255 24.12 26.9775 24.0525 26.7 23.985L25.4025 23.6475L26.4525 23.25C26.3775 22.8225 26.31 22.3875 26.2425 21.96C26.055 20.82 25.86 19.635 25.5675 18.5175L25.4925 18.2325C25.1025 16.8 24.6975 15.3075 25.4925 13.68L25.5975 13.4625L25.83 13.515L26.58 13.68C27.135 13.8 27.72 13.92 28.275 14.1C28.4541 14.1813 28.6567 14.1946 28.845 14.1375C28.9615 14.0353 29.0362 13.8938 29.055 13.74C29.7225 10.7775 29.2125 8.445 27.48 6.6C27.3484 6.51437 27.2005 6.45684 27.0456 6.43103C26.8908 6.40522 26.7322 6.41167 26.58 6.45C24.2475 7.26 22.7475 9.0225 21.9825 11.8275C21.9422 11.9211 21.9215 12.0219 21.9215 12.1237C21.9215 12.2256 21.9422 12.3264 21.9825 12.42C22.1111 12.5598 22.288 12.6456 22.4775 12.66C23.0025 12.765 23.5275 12.9225 24.03 13.065L24.7125 13.2675L25.005 13.3425L24.9225 13.635C24.4831 15.4104 24.6036 17.2783 25.2675 18.9825C25.5614 20.0855 25.7027 21.2236 25.6875 22.365V22.8675C25.6453 23.1418 25.5209 23.3969 25.3308 23.5991C25.1406 23.8013 24.8937 23.941 24.6225 24C23.715 24.0675 22.785 24.0525 21.81 24.045H20.25L20.3325 23.6775C20.4 23.355 20.475 23.055 20.5425 22.77C20.6787 22.2627 20.779 21.7464 20.8425 21.225C20.8992 20.4001 20.8816 19.5718 20.79 18.75L20.595 18.63C20.5329 18.6923 20.4799 18.763 20.4375 18.84C20.325 20.055 20.235 21.2775 20.145 22.485L20.04 23.9025H15.54L15.675 23.4975C16.425 21.3225 16.2525 19.185 15.12 16.365C14.3656 14.6642 14.1763 12.7663 14.58 10.95C14.5974 10.7546 14.6544 10.5647 14.7474 10.392C14.8405 10.2192 14.9677 10.0672 15.1213 9.94518C15.2749 9.82313 15.4517 9.73358 15.641 9.68197C15.8303 9.63037 16.0282 9.61779 16.2225 9.645C17.1098 9.742 18.0051 9.742 18.8925 9.645C19.0338 9.58697 19.1612 9.4994 19.2659 9.38816C19.3707 9.27692 19.4505 9.14458 19.5 9C19.5 5.4975 18.3225 2.91 15.84 1.08C15.7269 0.967141 15.5921 0.878322 15.4438 0.818881C15.2955 0.75944 15.1367 0.730604 14.977 0.734107C14.8172 0.73761 14.6599 0.77338 14.5143 0.839265C14.3687 0.905151 14.238 0.999791 14.13 1.1175C11.67 2.925 10.5 5.52 10.5 9.0525C10.6377 9.31805 10.8708 9.52167 11.1525 9.6225C11.7901 9.69042 12.4321 9.70797 13.0725 9.675H14.0325H14.4525L14.3175 10.0725C13.4475 12.645 14.13 14.88 14.8575 17.25C14.955 17.5875 15.06 17.925 15.165 18.27C15.4398 19.5001 15.5107 20.7669 15.375 22.02L15.3375 22.6875C15.2689 22.9895 15.1186 23.2668 14.903 23.489C14.6873 23.7112 14.4147 23.8699 14.115 23.9475C13.2871 24.0205 12.4554 24.0406 11.625 24.0075H10.5525H10.2675L10.17 22.5525C10.08 21.255 9.98996 20.0175 9.88496 18.8025C9.86414 18.7514 9.83638 18.7035 9.80246 18.66C9.69683 18.701 9.59619 18.7538 9.50246 18.8175V19.1475C9.49571 20.0808 9.57859 21.0126 9.74996 21.93C9.92246 22.7175 10.0125 23.265 9.74996 23.6175C9.48746 23.97 8.99996 24 8.24996 24H6.64496C5.54246 24 4.90496 23.8125 4.52246 23.385C4.13996 22.9575 4.02746 22.29 4.15496 21.18C4.18854 20.7174 4.28181 20.2611 4.43246 19.8225C5.18246 18.03 5.82746 15.885 5.13746 13.5525L5.04746 13.2525L5.35496 13.1775L6.10496 12.9825C6.60746 12.84 7.07246 12.7125 7.55246 12.6225C7.85246 12.57 8.03246 12.4875 8.09996 12.375C8.17038 12.2045 8.17038 12.013 8.09996 11.8425C7.34996 8.9925 5.84996 7.2 3.43496 6.375C3.27939 6.34911 3.12011 6.35644 2.96757 6.39651C2.81504 6.43658 2.67272 6.50849 2.54996 6.6075C0.862462 8.4075 0.374962 10.65 0.997462 13.65C1.00562 13.7372 1.03104 13.8219 1.07224 13.8991C1.11344 13.9764 1.16961 14.0447 1.23746 14.1C1.39901 14.1632 1.57842 14.1632 1.73996 14.1C2.31746 13.9125 2.91746 13.785 3.49496 13.6575L4.24496 13.485L4.43246 13.4175ZM21.5325 28.7625H3.74996C3.37601 28.7881 3.00069 28.7396 2.64549 28.6199C2.29028 28.5002 1.96218 28.3117 1.67996 28.065C1.49187 27.8657 1.34738 27.6294 1.25569 27.3711C1.16401 27.1128 1.12715 26.8383 1.14746 26.565C1.14746 25.2525 2.13746 24.435 3.67496 24.435C11.73 24.435 19.1475 24.435 26.355 24.435C26.7019 24.4171 27.0489 24.4681 27.3759 24.5853C27.7029 24.7025 28.0034 24.8834 28.26 25.1175C28.4504 25.3168 28.5989 25.5522 28.6968 25.8098C28.7947 26.0674 28.84 26.3421 28.83 26.6175C28.83 27.9225 27.87 28.71 26.295 28.7175L21.5325 28.7625ZM15 28.1475H26.31C27.18 28.1475 28.2225 27.8775 28.2375 26.6475C28.249 26.4498 28.2197 26.2519 28.1513 26.0661C28.0829 25.8802 27.9769 25.7105 27.84 25.5675C27.6372 25.3863 27.3996 25.2482 27.1417 25.1618C26.8838 25.0755 26.611 25.0425 26.34 25.065C19.1325 25.065 11.715 25.065 3.66746 25.065C2.43746 25.065 1.75496 25.6125 1.73996 26.565C1.72656 26.7529 1.75156 26.9416 1.81346 27.1195C1.87535 27.2975 1.97283 27.461 2.09996 27.6C2.32493 27.7961 2.58667 27.9455 2.86995 28.0395C3.15322 28.1335 3.45237 28.1702 3.74996 28.1475H15ZM28.59 13.665L22.3875 12.165L22.4625 11.8725C22.6564 10.8802 23.0685 9.9435 23.6691 9.13018C24.2697 8.31685 25.0437 7.64729 25.935 7.17C26.0748 7.05987 26.2375 6.98225 26.4111 6.94276C26.5846 6.90327 26.7648 6.9029 26.9386 6.94167C27.1123 6.98044 27.2753 7.05738 27.4156 7.16692C27.556 7.27646 27.6702 7.41586 27.75 7.575C28.845 9.135 29.1225 10.86 28.6725 13.35L28.59 13.665ZM23.1225 11.685L28.1025 12.9225C28.4325 10.7775 28.17 9.27 27.225 7.92C26.9025 7.4625 26.7075 7.41 26.22 7.6725C25.4443 8.07762 24.7657 8.64614 24.2309 9.33886C23.6962 10.0316 23.318 10.832 23.1225 11.685ZM1.49996 13.65L1.43246 13.35C0.854962 10.9425 1.17746 9.075 2.42996 7.47C2.62472 7.28106 2.86709 7.1485 3.13124 7.08642C3.39539 7.02434 3.67143 7.03508 3.92996 7.1175C5.72246 7.8675 6.88496 9.3675 7.58996 11.8125L7.67996 12.12L1.49996 13.65ZM3.53246 7.65C3.30921 7.6451 3.09052 7.71361 2.90996 7.845C2.36999 8.55745 2.00232 9.38526 1.83577 10.2636C1.66922 11.1419 1.7083 12.0468 1.94996 12.9075L6.92246 11.6775C6.26246 9.585 5.25746 8.3475 3.69746 7.68C3.64076 7.65562 3.579 7.64533 3.51746 7.65H3.53246ZM19.1025 9.06H10.8975V8.7375C11.1 5.1525 12.3525 2.7375 14.835 1.2375L15 1.1325L15.1575 1.2375C17.7 2.8425 18.9075 5.2275 19.0575 8.7375L19.1025 9.06ZM11.5575 8.4525H18.45C18.285 5.4 17.1825 3.2925 15 1.8525C12.855 3.2475 11.775 5.295 11.5425 8.4525H11.5575Z" fill="#E4E4E4"/>
</svg>

            
                )
    }else{
        return(
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_416_9294)">
<g clip-path="url(#clip1_416_9294)">
<path d="M10.5677 23.7675C11.7477 23.819 12.9297 23.8015 14.1077 23.715C14.3368 23.6487 14.5452 23.525 14.7131 23.3557C14.8811 23.1864 15.0031 22.9771 15.0677 22.7475C15.2396 21.2953 15.1839 19.8251 14.9027 18.39C14.1077 15.6675 13.0202 13.0425 14.0552 9.99001C13.0803 10.0407 12.1031 10.0256 11.1302 9.94501C10.7777 9.90001 10.2227 9.39001 10.2152 9.08251C10.2152 5.78251 11.1602 2.925 13.9652 0.870005C14.2442 0.604071 14.6148 0.455719 15.0002 0.455719C15.3856 0.455719 15.7562 0.604071 16.0352 0.870005C18.8252 2.91751 19.8377 5.76001 19.7852 9.0675C19.7258 9.27972 19.6144 9.4738 19.4612 9.63223C19.308 9.79067 19.1178 9.90847 18.9077 9.97501C17.9978 10.0726 17.0801 10.0726 16.1702 9.97501C15.3302 9.91501 15.0227 10.32 14.8427 11.055C14.4433 12.8156 14.6276 14.6584 15.3677 16.305C16.3127 18.66 16.8227 21.06 15.9302 23.6775H19.7702C19.8827 22.095 19.9877 20.4825 20.1377 18.8775C20.1377 18.675 21.0827 18.57 21.0977 18.735C21.1652 19.485 21.0077 22.6725 21.0002 23.7075C21.7502 23.7075 22.3052 23.7075 22.7027 23.7675C23.7152 23.8575 24.1352 23.985 24.6227 23.7675C25.1102 23.55 25.3727 23.13 25.3727 22.95C25.4021 21.6641 25.2583 20.3801 24.9452 19.1325C24.2625 17.3698 24.1419 15.439 24.6002 13.605C23.8502 13.395 23.1002 13.1475 22.3502 12.9975C21.6002 12.8475 21.4427 12.4725 21.6002 11.79C22.3127 9.15751 23.7302 7.11751 26.4002 6.1875C26.608 6.12781 26.8268 6.11775 27.0392 6.15814C27.2515 6.19852 27.4514 6.28822 27.6227 6.42001C29.6327 8.55 29.8727 11.115 29.2727 13.8525C29.1227 14.52 28.7402 14.6025 28.1027 14.4375C27.3527 14.19 26.5127 14.0475 25.7027 13.86C24.8927 15.495 25.3727 16.965 25.7852 18.495C26.1977 20.025 26.4227 21.84 26.7227 23.52C26.5952 23.5725 27.1427 23.865 27.5477 23.9925C28.1584 24.1759 28.6902 24.5583 29.0586 25.0788C29.4269 25.5993 29.6105 26.2281 29.5802 26.865C29.5612 27.5241 29.3112 28.1556 28.8739 28.6491C28.4366 29.1426 27.8397 29.4668 27.1877 29.565C27.1004 29.5723 27.0126 29.5723 26.9252 29.565C18.9452 29.565 10.9577 29.565 2.97021 29.565C2.42787 29.5518 1.90313 29.3698 1.46897 29.0446C1.0348 28.7193 0.712791 28.2668 0.547708 27.75C0.394353 27.3751 0.322442 26.9719 0.336743 26.5672C0.351044 26.1624 0.451231 25.7653 0.630659 25.4022C0.810088 25.0391 1.06466 24.7182 1.37749 24.461C1.69033 24.2037 2.05428 24.0159 2.44521 23.91C2.81271 23.7975 3.19521 23.7225 3.63021 23.6175C3.20175 21.7678 3.40233 19.828 4.20021 18.105C4.51256 17.4288 4.67744 16.6939 4.68391 15.949C4.69037 15.2042 4.53827 14.4665 4.23771 13.785C3.41271 13.98 2.56521 14.13 1.75521 14.3925C1.06521 14.6175 0.750208 14.3325 0.630208 13.7325C0.0602075 11.07 0.285208 8.53501 2.25021 6.42001C2.41387 6.27867 2.60816 6.17731 2.81772 6.12394C3.02728 6.07058 3.24637 6.06666 3.45771 6.1125C6.18021 7.05 7.62771 9.1125 8.34021 11.805C8.53521 12.555 8.25021 12.84 7.54521 12.9675C6.84021 13.095 6.20271 13.305 5.40021 13.515C6.07521 15.8025 5.54271 17.9175 4.65021 20.0025C4.50545 20.4163 4.41715 20.8476 4.38771 21.285C4.16271 23.2125 4.66521 23.7675 6.58521 23.7675H8.15271C9.65271 23.7675 9.18771 19.86 9.17271 18.7575C9.17271 18.6075 10.1552 18.6225 10.1702 18.8025C10.3427 20.415 10.4477 22.0275 10.5677 23.7675ZM15.0002 28.5H26.3402C27.7802 28.5 28.5902 27.8325 28.5902 26.6925C28.5902 25.5525 27.8402 24.8025 26.4152 24.8025C18.8402 24.8025 11.2602 24.8025 3.67521 24.8025C2.25771 24.8025 1.42521 25.515 1.42521 26.64C1.42521 27.765 2.25021 28.5 3.75021 28.5H15.0002ZM11.2502 8.75251H18.7502C18.6752 5.68501 17.6777 3.18 15.0002 1.5C12.3827 3.12 11.3852 5.59501 11.2052 8.78251L11.2502 8.75251ZM7.31271 11.9025C6.66021 9.82501 5.67771 8.25001 3.75021 7.41751C3.55207 7.36388 3.34379 7.35978 3.1437 7.40555C2.9436 7.45132 2.75782 7.54557 2.60271 7.68001C1.30521 9.33 1.14771 11.205 1.65021 13.3125L7.31271 11.9025ZM28.4252 13.305C28.8077 11.1975 28.7102 9.3975 27.5552 7.74001C27.4996 7.61175 27.415 7.49808 27.3082 7.40787C27.2014 7.31766 27.0752 7.25335 26.9394 7.21996C26.8037 7.18656 26.6621 7.18498 26.5256 7.21535C26.3891 7.24571 26.2615 7.3072 26.1527 7.39501C25.2962 7.84801 24.5524 8.48753 23.976 9.26637C23.3997 10.0452 23.0056 10.9435 22.8227 11.895L28.4252 13.305Z" fill="#16DB93"/>
<path d="M7.26751 11.9325L1.67251 13.3125C1.17001 11.205 1.32751 9.33 2.62501 7.68C2.77769 7.54916 2.95963 7.45699 3.15544 7.4113C3.35126 7.36561 3.55519 7.36774 3.75001 7.4175C5.67751 8.25 6.66001 9.825 7.26751 11.9325Z" fill="white"/>
<path d="M1.42508 13.8L0.892578 10.3425L1.64258 8.32499L2.44508 7.04999L5.18258 7.64249L6.18758 8.51249L7.26758 10.8825C7.4297 11.1133 7.55847 11.3658 7.65008 11.6325C7.67381 11.937 7.67381 12.2429 7.65008 12.5475L1.42508 13.8Z" fill="#16DB93"/>
<path d="M22.3652 12.2325L23.4377 8.9025L24.9902 7.4025L26.3027 6.6525L28.5002 8.4L29.0102 9.63L28.9127 12.2325C28.955 12.5184 28.955 12.8091 28.9127 13.095C28.7973 13.3781 28.6593 13.6514 28.5002 13.9125L22.3652 12.2325Z" fill="#16DB93"/>
<path d="M10.8599 9.24001L11.3024 4.68751L12.8024 2.35501L14.2499 0.975006L17.3849 2.55751L18.3374 3.96001L18.8999 7.29001C19.0233 7.64559 19.0965 8.01667 19.1174 8.39251C19.0517 8.78416 18.9564 9.17027 18.8324 9.54751L10.8599 9.24001Z" fill="#16DB93"/>
</g>
</g>
<defs>
<clipPath id="clip0_416_9294">
<rect width="30" height="30" fill="white"/>
</clipPath>
<clipPath id="clip1_416_9294">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>

        )
    }
}