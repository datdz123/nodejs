// eCommerce_Reactjs/src/App.js
import React from 'react';

function App() {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Về Chúng Tôi</h1>
            <p style={styles.description}>
                Chào mừng bạn đến với [Tên Doanh Nghiệp]! Chúng tôi chuyên cung cấp những sản phẩm chất lượng cao với giá cả phải chăng.
            </p>
            <img src="https://example.com/hinh-anh-doanh-nghiep.jpg" alt="Hình ảnh doanh nghiệp" style={styles.image} />
            <h2 style={styles.subTitle}>Sứ Mệnh</h2>
            <p style={styles.description}>
                Sứ mệnh của chúng tôi là mang đến cho khách hàng trải nghiệm mua sắm tuyệt vời nhất với những sản phẩm tốt nhất. Chúng tôi cam kết cung cấp dịch vụ khách hàng tận tâm, hỗ trợ khách hàng trong suốt quá trình mua sắm.
            </p>
            <h2 style={styles.subTitle}>Giá Trị</h2>
            <ul style={styles.list}>
                <li>Chất lượng sản phẩm hàng đầu</li>
                <li>Dịch vụ khách hàng tận tâm</li>
                <li>Giá cả hợp lý</li>
                <li>Chính sách bảo hành và đổi trả linh hoạt</li>
            </ul>
            <h2 style={styles.subTitle}>Lịch Sử Phát Triển</h2>
            <p style={styles.description}>
                [Tên Doanh Nghiệp] được thành lập vào năm 2020 với mục tiêu trở thành một trong những doanh nghiệp hàng đầu trong lĩnh vực thương mại điện tử. Chúng tôi đã không ngừng nỗ lực để cải thiện chất lượng sản phẩm và dịch vụ, nhằm mang đến cho khách hàng trải nghiệm mua sắm tốt nhất.
            </p>
            <h2 style={styles.subTitle}>Tầm Nhìn</h2>
            <p style={styles.description}>
                Chúng tôi hướng đến trở thành một doanh nghiệp hàng đầu trong lĩnh vực thương mại điện tử, với mục tiêu cung cấp cho khách hàng những sản phẩm chất lượng cao và dịch vụ khách hàng tận tâm.
            </p>
        </section>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: 'auto',
    },
    title: {
        textAlign: 'center',
        color: '#333',
    },
    subTitle: {
        marginTop: '20px',
        color: '#555',
    },
    description: {
        color: '#666',
        lineHeight: '1.5',
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '20px',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '20px',
    },
};

export default App;