
export const PestNewIcon= (props) => {
    if(!props.active){
        return (
            <svg width="26" height="26" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.4875 29.955L2.2275 28.725C2.73 28.2225 3.2025 27.735 3.7275 27.27C3.83131 27.1753 3.91326 27.0592 3.96765 26.9297C4.02205 26.8002 4.04759 26.6604 4.0425 26.52C4.0425 25.5 4.0425 24.4725 4.0425 23.4525C4.03979 23.3668 4.05904 23.2819 4.09842 23.2057C4.1378 23.1296 4.19601 23.0648 4.2675 23.0175C5.115 22.455 5.9925 21.855 6.8775 21.2775C6.93459 21.2485 6.97952 21.2001 7.00425 21.1411C7.02898 21.082 7.0319 21.016 7.0125 20.955C6.7575 20.01 6.5325 19.065 6.3075 18.12C6.27 17.955 6.2175 17.8725 6.045 17.895C5.80373 17.8483 5.55415 17.8715 5.32562 17.9619C5.09708 18.0522 4.89911 18.2059 4.755 18.405C4.335 18.9075 3.8325 19.3425 3.3675 19.8C3.29426 19.8692 3.19822 19.9092 3.0975 19.9125H0V18.135H1.2375C1.65215 18.1887 2.07281 18.1735 2.4825 18.09C2.835 17.94 3.09 17.535 3.39 17.2425C3.69 16.95 4.065 16.38 4.5075 16.185C5.00143 16.0846 5.50917 16.0719 6.0075 16.1475V15.87C6.0075 15.12 6.0075 14.37 6.0075 13.62C6.01996 13.5641 6.01969 13.506 6.0067 13.4502C5.99372 13.3944 5.96836 13.3422 5.9325 13.2975C5.37 12.945 4.8 12.6 4.2225 12.27C4.16308 12.2395 4.11213 12.1948 4.07419 12.1398C4.03624 12.0849 4.01247 12.0214 4.005 11.955C4.005 11.16 4.005 10.3575 4.005 9.555C3.99489 9.41027 3.93683 9.27304 3.84 9.165C3.3 8.64 2.7525 8.1225 2.2275 7.6275L3.4575 6.3L4.635 7.455C4.80663 7.6529 4.9921 7.83837 5.19 8.01C5.41114 8.16717 5.58338 8.38362 5.68688 8.6344C5.79038 8.88519 5.82092 9.16011 5.775 9.4275C5.7225 9.9225 5.775 10.4175 5.775 10.9275C5.77037 11.0075 5.7883 11.0872 5.82675 11.1574C5.86521 11.2277 5.92264 11.2858 5.9925 11.325C6.1875 11.4225 6.3675 11.5425 6.57 11.6625L6.6825 11.4525C6.96337 10.8327 7.36458 10.2748 7.86284 9.81128C8.36111 9.34778 8.94649 8.98788 9.585 8.7525C9.6955 8.70868 9.78619 8.626 9.84 8.52C10.3376 7.4597 10.9897 6.47904 11.775 5.61C10.4872 4.13788 9.53064 2.40633 8.97 0.5325L10.62 0.0075C10.8225 0.525 11.0025 1.0275 11.2125 1.5075C11.636 2.52473 12.221 3.46687 12.945 4.2975C12.9675 4.33542 12.9979 4.36806 13.0341 4.39321C13.0703 4.41836 13.1115 4.43542 13.1549 4.44325C13.1983 4.45107 13.2429 4.44947 13.2856 4.43856C13.3283 4.42765 13.3682 4.40768 13.4025 4.38C13.8969 4.14472 14.4375 4.02263 14.985 4.02263C15.5325 4.02263 16.0731 4.14472 16.5675 4.38C16.599 4.39893 16.6339 4.41143 16.6702 4.41677C16.7065 4.42211 16.7435 4.42019 16.7791 4.41112C16.8147 4.40206 16.8481 4.38602 16.8774 4.36394C16.9068 4.34186 16.9314 4.31418 16.95 4.2825C17.8966 3.16876 18.6243 1.88629 19.095 0.5025L19.2675 0L20.9325 0.525C20.3928 2.37839 19.4618 4.09448 18.2025 5.5575C18.6952 6.20469 19.1485 6.88091 19.56 7.5825C19.8804 8.28032 20.4387 8.84131 21.135 9.165C22.0603 9.62279 22.7879 10.401 23.1825 11.355C23.1825 11.445 23.265 11.5275 23.3175 11.6325C23.5523 11.5048 23.7801 11.3646 24 11.2125C24.0766 11.1344 24.1196 11.0294 24.12 10.92C24.12 10.2075 24.12 9.495 24.12 8.7825C24.1139 8.68084 24.143 8.58017 24.2025 8.4975L26.4525 6.3525L27.6 7.56C27.165 7.995 26.6925 8.505 26.1825 8.9925C26.081 9.08821 26.0016 9.20488 25.9498 9.33441C25.898 9.46394 25.875 9.6032 25.8825 9.7425C25.8825 10.4925 25.8825 11.1975 25.8825 11.925C25.8835 12.0023 25.8639 12.0785 25.8257 12.1458C25.7874 12.213 25.732 12.2688 25.665 12.3075C25.095 12.6375 24.54 12.9825 23.9775 13.3125C23.9123 13.3404 23.8588 13.39 23.826 13.4529C23.7932 13.5158 23.7831 13.5881 23.7975 13.6575C23.85 14.46 23.865 15.27 23.895 16.125C23.9972 16.1369 24.1003 16.1369 24.2025 16.125C24.5794 16.0477 24.9708 16.085 25.3263 16.232C25.6819 16.379 25.9853 16.6291 26.1975 16.95C26.5072 17.317 26.8513 17.6535 27.225 17.955C27.3564 18.0601 27.5152 18.1251 27.6825 18.1425C29.1825 18.18 30.6375 18.105 32.1075 18.2175L32.01 19.9275C30.315 19.89 28.62 19.9275 26.925 19.9275C26.7757 19.9179 26.6335 19.86 26.52 19.7625C26.0466 19.3391 25.5983 18.8883 25.1775 18.4125C25.0287 18.2168 24.8289 18.0658 24.6001 17.9759C24.3713 17.8859 24.1222 17.8606 23.88 17.9025C23.6625 17.9025 23.61 17.9775 23.565 18.33C23.4633 19.1805 23.2542 20.0147 22.9425 20.8125C22.83 21.12 22.875 21.2175 23.0625 21.3375C23.9325 21.915 24.795 22.5075 25.6725 23.0775C25.7444 23.1249 25.8033 23.1896 25.8439 23.2655C25.8845 23.3415 25.9055 23.4264 25.905 23.5125C25.905 24.57 25.905 25.62 25.905 26.67C25.9022 26.7766 25.9221 26.8826 25.9635 26.9809C26.0049 27.0792 26.0668 27.1675 26.145 27.24C26.655 27.735 27.1575 28.245 27.69 28.74L26.4225 29.955H26.3625C26.3134 29.8762 26.2556 29.8032 26.19 29.7375C25.575 29.1075 24.945 28.4925 24.3375 27.8625C24.2216 27.7438 24.1547 27.5858 24.15 27.42C24.15 26.3925 24.15 25.3725 24.15 24.3525C24.156 24.2497 24.1239 24.1483 24.06 24.0675C23.46 23.655 22.8525 23.2575 22.23 22.845L22.0575 23.22C21.4796 24.6843 20.6747 26.0485 19.6725 27.2625C18.9165 28.2661 17.9177 29.061 16.77 29.5725C16.3307 29.7271 15.8823 29.8549 15.4275 29.955H14.4825C14.4825 29.955 14.43 29.955 14.4075 29.955C13.0892 29.7404 11.8817 29.0878 10.98 28.1025C9.62543 26.6701 8.55184 24.9961 7.815 23.1675C7.815 23.07 7.7325 22.98 7.68 22.875C7.0875 23.2725 6.5325 23.625 5.97 24.015C5.90268 24.0565 5.84769 24.1152 5.81076 24.1851C5.77383 24.255 5.7563 24.3335 5.76 24.4125C5.76 25.425 5.76 26.4375 5.76 27.4125C5.74983 27.5757 5.68663 27.7311 5.58 27.855C4.98 28.4775 4.365 29.0775 3.765 29.685C3.6825 29.7675 3.6225 29.865 3.5475 29.9475L3.4875 29.955ZM14.055 28.035V9.8175C12.7341 9.79692 11.419 9.99458 10.1625 10.4025C9.62147 10.5925 9.1385 10.9186 8.76016 11.3495C8.38183 11.7804 8.12089 12.3014 8.0025 12.8625C7.85831 13.4698 7.78036 14.0909 7.77 14.715C7.80367 17.9144 8.60897 21.0584 10.1175 23.88C10.69 25.0573 11.47 26.1218 12.42 27.0225C12.8842 27.4758 13.4424 27.8214 14.055 28.035ZM15.8475 9.825V28.0575C16.065 27.96 16.26 27.8775 16.4475 27.78C17.3634 27.2324 18.145 26.4866 18.735 25.5975C20.2117 23.4361 21.2324 20.9965 21.735 18.4275C22.1417 16.7977 22.2434 15.1068 22.035 13.44C21.9755 12.7553 21.7205 12.1021 21.3004 11.5583C20.8802 11.0145 20.3125 10.6028 19.665 10.3725C18.4307 9.98382 17.1413 9.7989 15.8475 9.825ZM17.8725 8.1225C17.4712 7.42922 16.9448 6.81636 16.32 6.315C15.9448 5.96977 15.4536 5.77816 14.9437 5.77816C14.4339 5.77816 13.9427 5.96977 13.5675 6.315C12.9991 6.77821 12.5124 7.3334 12.1275 7.9575C12.09 8.0175 12.0675 8.085 12.0525 8.1075L17.8725 8.1225Z" fill="#E4E4E4"/>
</svg>

        )
    }else{
        return(
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.35 0.0450439L20.94 0.585044C20.3911 2.44694 19.4472 4.16858 18.1725 5.63254C18.9673 6.50807 19.6202 7.50261 20.1075 8.58004C18.4341 8.19142 16.7171 8.0225 15 8.07754C13.2701 8.02133 11.5402 8.1928 9.855 8.58754C10.3395 7.50859 10.9927 6.51365 11.79 5.64004C10.5107 4.17572 9.55946 2.45473 9 0.592544L10.605 0.0450439H10.665C10.7775 0.360044 10.89 0.682544 11.0175 0.997544C11.4691 2.23021 12.1399 3.37107 12.9975 4.36504C13.017 4.39906 13.0436 4.42842 13.0756 4.45109C13.1076 4.47376 13.1441 4.48921 13.1826 4.49634C13.2212 4.50348 13.2608 4.50214 13.2988 4.49242C13.3367 4.4827 13.3721 4.46482 13.4025 4.44004C13.8967 4.19936 14.4391 4.07428 14.9888 4.07428C15.5384 4.07428 16.0808 4.19936 16.575 4.44004C16.6077 4.46244 16.6448 4.47756 16.6839 4.48439C16.7229 4.49123 16.763 4.48962 16.8014 4.47967C16.8398 4.46972 16.8756 4.45166 16.9064 4.42672C16.9372 4.40177 16.9623 4.37051 16.98 4.33504C17.3704 3.85938 17.7287 3.35827 18.0525 2.83504C18.51 1.94254 18.8775 1.00504 19.2825 0.0825439L19.35 0.0450439Z" fill={props.fill}/>
            <path d="M0.0527344 18.12C0.802734 18.12 1.55273 18.12 2.30273 18.12C2.39188 18.1224 2.48056 18.1064 2.56317 18.0728C2.64579 18.0392 2.72055 17.9889 2.78273 17.925C3.27023 17.415 3.79523 16.95 4.28273 16.425C4.41356 16.2814 4.58188 16.1773 4.76873 16.1243C4.95558 16.0713 5.15352 16.0715 5.34023 16.125L5.48273 17.7375L4.34273 18.8175C4.03523 19.1175 3.75023 19.4325 3.42773 19.7175C3.32344 19.8077 3.19062 19.8582 3.05273 19.86C2.04773 19.86 1.05023 19.86 0.0527344 19.86V18.12Z" fill={props.fill}/>
            <path d="M15.8623 29.9325V9.82495C16.3648 9.82495 16.8598 9.82495 17.3623 9.90745C18.1807 9.9938 18.9924 10.1341 19.7923 10.3275C20.5686 10.5195 21.2677 10.9442 21.7959 11.5448C22.324 12.1453 22.656 12.8929 22.7473 13.6875C23.0063 15.3318 22.9606 17.0097 22.6123 18.6375C22.1244 21.3984 21.1247 24.0438 19.6648 26.4375C18.9866 27.638 18.0393 28.6649 16.8973 29.4375C16.5748 29.61 16.2298 29.745 15.8623 29.9325Z" fill={props.fill}/>
            <path d="M14.0925 9.83252V29.9025C13.86 29.7975 13.635 29.7225 13.425 29.6175C12.3695 29.0237 11.4718 28.1852 10.8075 27.1725C9.30243 24.9848 8.22591 22.5314 7.63504 19.9425C7.22025 18.3825 7.03083 16.7712 7.07254 15.1575C7.09769 14.3965 7.21351 13.6411 7.41754 12.9075C7.55506 12.3967 7.8039 11.9227 8.14622 11.5194C8.48855 11.1162 8.91587 10.7937 9.39754 10.575C10.8998 10.0261 12.4942 9.77392 14.0925 9.83252Z" fill={props.fill}/>
            <path d="M27.6223 28.6275L26.3923 29.865C26.3399 29.8253 26.2898 29.7828 26.2423 29.7375C25.5973 29.0925 24.9448 28.455 24.3148 27.795C24.217 27.6839 24.1566 27.5448 24.1423 27.3975C24.1423 26.385 24.1423 25.3725 24.1423 24.3975C24.1529 24.3126 24.1379 24.2265 24.0991 24.1503C24.0604 24.0741 23.9996 24.0113 23.9248 23.97C23.6398 23.805 23.3773 23.61 23.0923 23.415L23.6698 21.705C24.4198 22.185 25.0948 22.65 25.7848 23.13C25.8557 23.2131 25.8908 23.321 25.8823 23.43C25.8823 24.5025 25.8823 25.5675 25.8823 26.6325C25.8831 26.8292 25.9612 27.0178 26.0998 27.1575C26.6173 27.6225 27.1123 28.125 27.6223 28.6275Z" fill={props.fill}/>
            <path d="M6.2848 21.675L6.8623 23.3925C6.5848 23.58 6.3148 23.775 6.0298 23.9475C5.96384 23.9874 5.9092 24.0434 5.87112 24.1104C5.83303 24.1774 5.81278 24.253 5.8123 24.33C5.8123 25.3425 5.8123 26.355 5.8123 27.33C5.79843 27.5018 5.73012 27.6647 5.6173 27.795C4.9498 28.5 4.2598 29.1975 3.5998 29.8575L2.3623 28.6125C2.8273 28.14 3.3298 27.63 3.8623 27.1125C3.93499 27.0413 3.99242 26.9561 4.0311 26.8619C4.06978 26.7678 4.08891 26.6668 4.0873 26.565C4.0873 25.515 4.0873 24.4575 4.0873 23.4075C4.07766 23.3228 4.09314 23.2371 4.13181 23.1611C4.17048 23.0851 4.23064 23.0221 4.3048 22.98C4.9498 22.5825 5.6023 22.1325 6.2848 21.675Z" fill={props.fill}/>
            <path d="M3.47988 6.34497C4.22988 7.09497 4.97988 7.79997 5.72988 8.52747C5.78464 8.6146 5.80842 8.71765 5.79738 8.81997C5.79738 9.43497 5.79738 10.0425 5.79738 10.6575C5.79738 10.965 5.75238 11.2725 6.13488 11.355L5.51988 13.0275C5.06988 12.7575 4.61238 12.4875 4.16238 12.2025C4.12694 12.1689 4.0992 12.1281 4.08107 12.0827C4.06294 12.0374 4.05486 11.9887 4.05738 11.94C4.05738 11.1375 4.05738 10.3425 4.05738 9.54747C4.0424 9.4017 3.98504 9.26351 3.89238 9.14997C3.37488 8.59497 2.83488 8.06247 2.31738 7.53747L3.47988 6.34497Z" fill={props.fill}/>
            <path d="M24.4202 13.0275L23.8052 11.355C24.1727 11.2725 24.1502 10.98 24.1427 10.68C24.1427 10.0575 24.1427 9.43504 24.1427 8.81254C24.135 8.70946 24.1614 8.60671 24.2177 8.52004L26.4677 6.35254L27.6752 7.62754C27.1652 8.10754 26.6027 8.61754 26.0702 9.12754C26.018 9.17666 25.9765 9.23594 25.9481 9.30172C25.9197 9.3675 25.9051 9.4384 25.9052 9.51004C25.9052 10.3125 25.9052 11.115 25.9052 11.9175C25.899 11.9779 25.8805 12.0363 25.8509 12.0892C25.8212 12.1421 25.781 12.1883 25.7327 12.225C25.2827 12.525 24.8477 12.75 24.4202 13.0275Z" fill={props.fill}/>
            <path d="M29.8949 18.1199V19.8524C28.9124 19.8524 27.9299 19.8524 26.9474 19.8524C26.8618 19.8531 26.777 19.8362 26.6983 19.8026C26.6196 19.7691 26.5487 19.7196 26.4899 19.6574C25.9574 19.1174 25.4174 18.5849 24.8849 18.0524C24.7724 17.9399 24.6524 17.8574 24.5249 17.7524L24.6674 16.1099C24.8597 16.0511 25.0649 16.0496 25.258 16.1056C25.4512 16.1615 25.6238 16.2725 25.7549 16.4249C26.2199 16.9574 26.7449 17.4449 27.2549 17.9249C27.3561 18.0174 27.4856 18.0729 27.6224 18.0824C28.3649 18.1274 29.1224 18.1199 29.8949 18.1199Z" fill={props.fill}/>
            </svg>
            
    
        )
    }
}