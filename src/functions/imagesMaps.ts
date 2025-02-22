export function imagesPlanets(name: string) {
    switch (name){
        case 'Uranus':
            return {
                name: 'Urano',
                image: 'https://img.rtve.es/imagenes/urano-descubrimiento-planeta-curiosiades-herschel-estrella/1678705110488.jpg',
            };
        case 'Neptune':
            return {
                name: 'Neptuno',
                image: 'https://humanidades.com/wp-content/uploads/2017/05/neptuno-e1569255785939.jpg',
            };
        case 'Jupiter':
            return {
                name: 'Júpiter',
                image: 'https://media.istockphoto.com/id/1482783826/es/foto/vista-art%C3%ADstica-del-planeta-j%C3%BApiter.jpg?s=612x612&w=0&k=20&c=epHGPNM-pB0d50xU0yIaRWPhX4SGjk-iMBLI9myXH0M=',
            };
        case 'Mars':
            return {
                name: 'Marte',
                image: 'https://img.cronista.com/files/image/739/739352/65afa12ea7fd4_360_202!.webp?s=ee1271d9807d61fb560825b10a63e4d0&d=1705978800&oe=jpg',
            };
        case 'Mercury':
            return {
                name: 'Mercurio',
                image: 'https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg',
            };
        case 'Saturn':
            return {
                name: 'Saturno',
                image: 'https://starwalk.space/gallery/images/saturn-planet-guide/1920x1080.jpg',
            };
        case 'Earth':
            return {
                name: 'Tierra',
                image: 'https://c.files.bbci.co.uk/D04F/production/_111872335_gettyimages-1162834347-1.jpg',
            };
        case 'Venus':
            return {
                name: 'Venus',
                image: 'https://starwalk.space/gallery/images/venus-atmosphere/1920x1080.jpg',
            };
        default:
            return {
                name: '',
                image: '',
            };
    }
}
