import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const GioHang = () => {
  const [maGiamGia, setMaGiamGia] = useState('');
  const [tongTien, setTongTien] = useState(141800);
  const [soLuong, setSoLuong] = useState(1);
  const giaMoiSanPham = 141800; // Giá của một sản phẩm

  const apDungMaGiamGia = () => {
    if (maGiamGia === 'GIAMGIA2024') {
      setTongTien(tongTien * 0.9); // Giảm 10% cho mã đúng
    } else {
      alert('Mã giảm giá không hợp lệ');
    }
  };

  const tangSoLuong = () => {
    setSoLuong(soLuong + 1);
    setTongTien(giaMoiSanPham * (soLuong + 1));
  };

  const giamSoLuong = () => {
    if (soLuong > 1) {
      setSoLuong(soLuong - 1);
      setTongTien(giaMoiSanPham * (soLuong - 1));
    }
  };

  return (
    <View style={styles.khungChua}>
      {/* Thông tin sản phẩm và hình ảnh */}
      <View style={styles.thongTinSanPham}>
        <Image
          source={{ uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp' }}
          style={styles.anhSanPham}
        />
        <View style={styles.chiTietSanPham}>
          <Text style={styles.tenSanPham}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.nhaCungCap}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.gia}>{giaMoiSanPham.toLocaleString()} đ</Text>
          
          {/* Tăng/giảm số lượng và Mua sau */}
          <View style={styles.khungSoLuongVaMuaSau}>
            <View style={styles.khungSoLuong}>
              <TouchableOpacity style={styles.nutSoLuong} onPress={giamSoLuong}>
                <Text style={styles.chuNutSoLuong}>-</Text>
              </TouchableOpacity>
              <Text style={styles.soLuong}>{soLuong}</Text>
              <TouchableOpacity style={styles.nutSoLuong} onPress={tangSoLuong}>
                <Text style={styles.chuNutSoLuong}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.muaSau}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Mã giảm giá đã lưu */}
      <View style={styles.phanMaGiamGiaDaLuu}>
        <Text style={styles.chuMaGiamGiaDaLuu}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.xemTaiDay}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      {/* Nhập mã giảm giá */}
      <View style={styles.phanMaGiamGia}>
        <TextInput
          style={styles.nhapMaGiamGia}
          placeholder="Mã giảm giá"
          value={maGiamGia}
          onChangeText={setMaGiamGia}
        />
        <TouchableOpacity style={styles.nutApDung} onPress={apDungMaGiamGia}>
          <Text style={styles.chuNutApDung}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.phanPhieuQuaTang}>
        <Text style={styles.chuPhieuQuaTang}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity>
          <Text style={styles.nhapTaiDay}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      {/* Tổng giá trị */}
      <View style={styles.phanTongKet}>
        <Text style={styles.nhanTamTinh}>Tạm tính</Text>
        <Text style={styles.giaTamTinh}>{tongTien.toLocaleString()} đ</Text>
      </View>

      <View style={styles.phanTongKet}>
        <Text style={styles.nhanThanhTien}>Thành tiền</Text>
        <Text style={styles.giaThanhTien}>{tongTien.toLocaleString()} đ</Text>
      </View>

      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.nutDatHang}>
        <Text style={styles.chuNutDatHang}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  khungChua: {
    padding: 20,
    backgroundColor: '#fff',
    width: 360,
    height: 640,
  },
  thongTinSanPham: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center', 
  },
  anhSanPham: {
    width: 100,
    height: 140, 
    marginRight: 10,
  },
  chiTietSanPham: {
    flex: 1,
  },
  tenSanPham: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nhaCungCap: {
    color: '#888',
    marginBottom: 5,
  },
  gia: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  khungSoLuongVaMuaSau: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  khungSoLuong: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nutSoLuong: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 30,
    alignItems: 'center',
  },
  chuNutSoLuong: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  soLuong: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  muaSau: {
    fontSize: 16,
    color: '#007BFF',
  },
  phanMaGiamGiaDaLuu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  chuMaGiamGiaDaLuu: {
    fontSize: 16,
  },
  xemTaiDay: {
    fontSize: 16,
    color: '#007BFF',
  },
  phanMaGiamGia: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  nhapMaGiamGia: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
  },
  nutApDung: {
    backgroundColor: '#007BFF',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chuNutApDung: {
    color: '#fff',
  },
  phanPhieuQuaTang: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chuPhieuQuaTang: {
    fontSize: 16,
    marginRight: 5,
  },
  nhapTaiDay: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  phanTongKet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nhanTamTinh: {
    fontSize: 16,
    color: '#888',
  },
  giaTamTinh: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  nhanThanhTien: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  giaThanhTien: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  nutDatHang: {
    backgroundColor: 'red',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  chuNutDatHang: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GioHang;
