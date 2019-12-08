
export function uploadImg(file) {
    const CLOUD_NAME = 'dcbeo6630'
    const PRESET_NAME = 'ut4qndey'
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', PRESET_NAME);

    return fetch(url, {
        method: 'POST',
        body: formData
    }).then(res => res.json());
}

