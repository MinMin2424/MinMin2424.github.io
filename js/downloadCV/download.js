const download = document.getElementById("download-cv");

download.addEventListener("click", (e) => {
    e.preventDefault();
    const downloadBtn = this;
    const originalHTML = downloadBtn.innerHTML;
    const pdfURL = "/docs/Minh_Thu_Tranova_CV.pdf";
    const fileName = "MinMin_Tranova_CV.pdf";

    fetch(pdfURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType.includes('application/pdf')) {
            throw new Error('Downloaded file is not a PDF')
        }
        return response.blob();
    })
    .then(blob => {
        const blobURL = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobURL;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobURL);
        }, 100);
    })
    .catch(error => {
        console.error('Downloaded failed: ', error);
        alert('Failed to download CV. Please try again later.');
    })
    .finally(() => {
        downloadBtn.innerHTML = originalHTML;
    })
});