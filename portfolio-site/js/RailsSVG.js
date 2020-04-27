class RailsSVG extends HTMLElement {

    connectedCallback() {


        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M242,0h28c8.89,1.11,17.83,1.9,26.65,3.37,53.23,8.9,99.49,31.87,138.06,69.69q61.71,60.54,74.4,146.26c1.11,7.54,1.93,15.12,2.89,22.68v28c-1.11,8.88-1.91,17.82-3.37,26.64-8,48.44-27.9,91.43-60.52,128.18q-62.33,70.23-155.42,84.28c-7.54,1.13-15.13,1.94-22.69,2.9H242c-8.72-1.08-17.5-1.85-26.16-3.28-48.27-7.94-91.18-27.58-127.92-60Q17,386.32,2.89,292.68C1.77,285.14,1,277.56,0,270V242c1.11-8.88,1.91-17.82,3.37-26.64,8-48.27,27.75-91.13,60.19-127.81Q125.95,17,219.31,2.89C226.85,1.77,234.44,1,242,0ZM416.7,148.53c-10.17-7.25-19.75-15.06-30.23-21.37-27.55-16.62-57-24.13-89.39-17.68-37.83,7.53-67.82,27.55-90.3,58.06-29.61,40.16-50.1,85.1-63.72,133-9,31.51-14.29,63.64-13.22,96.61.15,4.82,1.65,6.07,6.36,6.06,48.33-.17,96.66-.11,145-.11h5.49c-.62-1.89-1-3.29-1.53-4.63a374.2,374.2,0,0,1-20.56-71.86c-5.09-28.55-7.48-57.27-1.44-85.89,9.05-42.85,33.54-73.75,74-91.1,21.56-9.24,43.08-9.34,63.54,3.73,2.89,1.85,5.51,4.12,8.55,6.42ZM124.78,357.28c1.8-10.25,3.55-20.26,5.39-30.77-8-.58-15.46-1.17-22.89-1.64-7.64-.49-7.74-.45-8.78,7.07-1,7.16-1.76,14.35-2.66,21.79Zm4-131.16c-3.06,8.63-5.87,16.53-8.85,24.92l27.84,8.81c2.86-8.09,5.47-15.49,8.16-23.12ZM312.3,376.21c-3.75-7.7-7-14.41-10.31-21-.45-.89-1.59-2-2.42-2.06-8-.15-16.05-.09-24.54-.09,1.85,6.75,3.33,12.7,5.18,18.53a4.84,4.84,0,0,0,3.3,2.82C292.77,375.13,302.05,375.59,312.3,376.21ZM181.22,148.69c-5.65,6.23-11.05,12.18-16.66,18.38l21.29,14.21c5.39-6.37,10.6-12.51,16.06-18.95Zm60.39-23.19,19.59-11.35c-4.57-5.14-8.59-9.76-12.75-14.25-.62-.67-2.22-1.26-2.89-.93-6,3-11.89,6.11-18.17,9.4ZM268,280.19c-.41,6.83-.83,12.74-1,18.66a3.46,3.46,0,0,0,1.49,2.73c7.38,3.31,14.83,6.44,23.1,10-.36-6.4-.59-12-1.05-17.55a4,4,0,0,0-1.67-2.78C282.19,287.58,275.45,284.11,268,280.19Zm8.21-53.39c-2.39,4.79-4.68,9.19-6.74,13.69a3.22,3.22,0,0,0,.56,3c6,5.25,12,10.34,18.62,15.93,1.57-6.33,3.06-11.89,4.25-17.51a4.06,4.06,0,0,0-1.26-3.35C286.72,234.59,281.63,230.88,276.2,226.8ZM324,106c-.82-5.36-1.25-9.14-2-12.85-.26-1.18-1.38-3-2.22-3.11-7.72-.6-15.46-.87-23.59-1.25,1.07,5.39,1.88,10.11,3,14.76a3.64,3.64,0,0,0,2.48,2.34C308.88,106.1,316.12,106,324,106Zm-36.78,83.23,17.22,19c2.23-3.93,4.15-7.05,5.78-10.31.51-1,.78-2.75.26-3.6-3.38-5.45-7-10.74-10.73-16.35Zm44-15.33c13.23-9.64,12.63-7.23,8.52-18l-16,4.07Zm66.05-52.72-18.64-13.62-1.44.71c.41,3.39-.44,8.21,1.47,9.87,4.2,3.66,9.79,5.71,15,8.5C395,124.59,396,123.1,397.26,121.2Zm-6.05,41.94c-1.16-3.24-1.4-6.85-2.85-7.43-4.29-1.71-9.05-2.23-13.66-3.23-1.32,8.8-1.22,8.92,6.43,9.59C383.91,162.31,386.68,162.65,391.21,163.14Z"/></g></g></svg>        
        `;


    }

    
}


customElements.define('rails-icon', RailsSVG);



