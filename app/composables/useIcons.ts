export function useIcons() {
    const icons: Record<string, string> = {
        dashboard: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        database: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 2V22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 8.5H22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 15.5H22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        report: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.32 11.9999C20.92 11.9999 22 10.9999 21.04 7.71994C20.39 5.50994 18.49 3.60994 16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.9999 14.7C19.0699 19.33 14.6299 22.69 9.57993 21.87C5.78993 21.26 2.73993 18.21 2.11993 14.42C1.30993 9.39001 4.64993 4.95001 9.25993 4.01001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        settings: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        documentation: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5.48999V20.49" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.75 8.48999H5.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 11.49H5.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        message: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.9965 11H16.0054" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9955 11H12.0045" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99451 11H8.00349" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        logo: `
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0ZM12.0186 11.2402C11.7381 11.2403 11.4947 11.3352 11.2881 11.5244C11.0963 11.7135 11.0001 11.9532 11 12.2441V24.9961C11.0001 25.2724 11.0963 25.5122 11.2881 25.7158C11.4947 25.905 11.7381 26 12.0186 26H12.6387C12.9192 26 13.1557 25.905 13.3477 25.7158C13.554 25.5122 13.6571 25.2723 13.6572 24.9961V20.1924C13.6572 20.0177 13.7534 19.9297 13.9453 19.9297H17.9316C18.1233 19.9298 18.2188 20.0178 18.2188 20.1924V24.9961C18.2189 25.2723 18.3152 25.5122 18.5068 25.7158C18.7134 25.9049 18.957 25.9999 19.2373 26H19.8359C20.1311 25.9999 20.3745 25.905 20.5664 25.7158C20.7581 25.5122 20.8544 25.2724 20.8545 24.9961V12.2441C20.8544 11.9533 20.7581 11.7135 20.5664 11.5244C20.3745 11.3352 20.1311 11.2403 19.8359 11.2402H19.2373C18.957 11.2403 18.7134 11.3353 18.5068 11.5244C18.3152 11.7135 18.2188 11.9533 18.2188 12.2441V17.0264C18.2187 17.2299 18.1232 17.3319 17.9316 17.332H13.9453C13.7534 17.332 13.6573 17.23 13.6572 17.0264V12.2441C13.6571 11.9534 13.554 11.7135 13.3477 11.5244C13.1557 11.3352 12.9192 11.2402 12.6387 11.2402H12.0186ZM24.0293 14.9297C23.749 14.9297 23.5054 15.0319 23.2988 15.2354C23.1069 15.4246 23.0107 15.658 23.0107 15.9346V24.9961C23.0108 25.2725 23.107 25.5121 23.2988 25.7158C23.5055 25.905 23.7488 26 24.0293 26H24.627C24.9075 26 25.144 25.905 25.3359 25.7158C25.5423 25.5122 25.6454 25.2723 25.6455 24.9961V15.9346C25.6455 15.658 25.5426 15.4246 25.3359 15.2354C25.144 15.0316 24.9074 14.9297 24.627 14.9297H24.0293ZM24.3389 11C23.8814 11.0001 23.483 11.1674 23.1436 11.502C22.8188 11.8222 22.6562 12.201 22.6562 12.6377C22.6563 13.0889 22.8188 13.4817 23.1436 13.8164C23.483 14.1366 23.8813 14.2968 24.3389 14.2969C24.7817 14.2969 25.1655 14.1366 25.4902 13.8164C25.8297 13.4817 26 13.0889 26 12.6377C26 12.201 25.8298 11.8222 25.4902 11.502C25.1655 11.1674 24.7816 11 24.3389 11Z" fill="#2E8571"/>
            </svg>
        `,
        license: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 4L10 20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
            </svg>
        `
    };

    return { icons };
}