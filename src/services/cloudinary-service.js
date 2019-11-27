export function uploadImg(cloudName, presetName, file) {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presetName);

    return fetch(url, {
        method: 'POST',
        body: formData
    }).then(res => res.json());
}