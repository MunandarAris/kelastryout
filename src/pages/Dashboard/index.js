import { Layout, Row, Col } from 'antd';
import { useState } from 'react'
import Logo from './../../assets/images/logo.png'
import ICTurunan from './../../assets/images/turunan.png'
import PhotoProfile from './../../assets/images/me.jpg'
import ICTryout1 from './../../assets/images/tryout-1.png'
import ICWallet from './../../assets/images/icons/wallet.png'
import ICDiamond from './../../assets/images/icons/diamond.png'
import ICPremium from './../../assets/images/icons/premium.png'
import BannerIllustration from './../../assets/images/banner-illustration.png'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import './styles.css'
import { 
  HomeOutlined,
  BookOutlined,
  FilterOutlined,
  VideoCameraOutlined,
  ScheduleOutlined,
  ReconciliationOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  MenuOutlined,
  BellOutlined,
} from '@ant-design/icons'

const { Sider, Header, Content } = Layout
 
function Dashboard() {

  const [siderCollapse, setSiderCollapse] = useState(false)

  const menus = [
    {
      label:'Home',
      icon:HomeOutlined,
    },
    {
      label:'Materi',
      icon:BookOutlined,
    },
    {
      label:'Tryout',
      icon:FilterOutlined,
    },
    {
      label:'Live Class',
      icon:VideoCameraOutlined,
    },
    {
      label:'Event',
      icon:ScheduleOutlined,
    },
    {
      label:'Kuis',
      icon:ReconciliationOutlined,
    },
    {
      label:'Paket',
      icon:ShoppingCartOutlined,
    },
    {
      label:'Voucher Soal',
      icon:TagsOutlined,
    },

  ]

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  const iconStyle={
    fontSize:24,
    color:"#30B44B"
  }

  return (
    <Layout>
      <Sider collapsible collapsed={siderCollapse} trigger={null} width={200} className="sider">
        <div className="logo">
          <img src={Logo} />  
        </div>
        <div className="menu-container">
          {
            menus.map((data,i)=>
              i == 0 ?
              <div className={'menu-wrapper-active'}>
                <div className={"menu menu-active"}>
                  <data.icon className={"menu-icon menu-icon-active"} color="white" />
                  {
                    !siderCollapse && <div className={"menu-label menu-label-active"}>{data.label}</div>
                  }
                </div>
              </div>:
              <div className={'menu-wrapper'}>
                <div className={"menu"} style={siderCollapse ? {padding:"8px 8px"} : {}}>
                  <data.icon className={"menu-icon menu-icon"} color="white" />
                  {
                    !siderCollapse && <div className={"menu-label menu-label"}>{data.label}</div>
                  }
                </div>
              </div>
            )
          }
        </div>  
      </Sider>  
      <Layout>
        <Content>
          <Row>
            <Col span={17}>
              <div className="content-container">
                <div className="header">
                  <Row>
                    <Col flex={1}>
                      <MenuOutlined onClick={()=>setSiderCollapse(prevState => !prevState)} style={iconStyle}/>
                    </Col>
                    <Col>
                      <Row>
                        <BellOutlined style={iconStyle} />
                        <ShoppingCartOutlined style={iconStyle}/>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="content">
                  <div className="banner">
                    <Row style={{height:'100%'}}>
                      <Col span={12}>
                        <div className="greeting-wrapper">
                          <div className="greeting">Selamat Pagi, Sintya!</div>
                          <div className="greeting-desc">Nikmati pengalaman belajar online paling lengkap, dan mudah dimengerti.</div>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="banner-illustration-wrapper">
                          <img className="banner-illustration" src={BannerIllustration} />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <Row type="flex" gutter={16} style={{marginTop:24, padding:"0px important"}}>
                    <Col span={12}>
                      <div className="card">
                        <div className="card-header">
                          <div className="card-title">Tryout</div>
                          <div className="card-desc">*Nilai rata-rata tryout</div>
                        </div>
                        <div className="chart-wrapper">
                          <ResponsiveContainer>
                            <LineChart
                              width={500}
                              height={300}
                              data={data}
                            >
                              <CartesianGrid strokeDasharray="0" stroke="#eee" />
                              <XAxis tick={{fontSize:8, fill:'black'}} tickLine={{stroke:'#fff'}} stroke="#fff" dataKey="name" />
                              <YAxis tick={{fontSize:8, fill:'black'}} tickLine={{stroke:'#fff'}} stroke="#fff" width={32} />
                              <Tooltip />
                              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Col>
                    <Col span={12} style={{height:'100%'}} flex={1}>
                      <div className="card">
                        <div className="card-header">
                          <div className="card-title">Kuis</div>
                          <div className="card-desc"> </div>
                        </div>
                        <div className="chart-wrapper">
                          <ResponsiveContainer>
                            <BarChart
                              width={500}
                              height={300}
                              data={data}
                            >
                              <CartesianGrid strokeDasharray="0" stroke="#eee" />
                              <XAxis tick={{fontSize:8, fill:'black'}} tickLine={{stroke:'#fff'}} stroke="#fff" dataKey="name" />
                              <YAxis tick={{fontSize:8, fill:'black'}} tickLine={{stroke:'#fff'}} stroke="#fff" width={32} />
                              <Tooltip />
                              <Bar dataKey="pv" fill="#8884d8" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16} style={{marginTop:24}}>
                    <Col span={24} className="content-title">Materi Saya</Col>
                    <Col span={8}>
                      <div className="card-materi">
                        <Row style={{width:'100%'}}>
                          <Col flex={1}>
                            <div className="materi-title">Medan Magnet</div>
                            <div className="materi-desc">Video . 13 jam lalu</div>
                          </Col>
                          <Col style={{padding:"0px 16px"}}>
                            <img width={44} src={ICTurunan} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="card-materi">
                        <Row style={{width:'100%'}}>
                          <Col flex={1}>
                            <div className="materi-title">Medan Magnet</div>
                            <div className="materi-desc">Video . 13 jam lalu</div>
                          </Col>
                          <Col style={{padding:"0px 16px"}}>
                            <img width={44} src={ICTurunan} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="card-materi">
                        <Row style={{width:'100%'}}>
                          <Col flex={1}>
                            <div className="materi-title">Medan Magnet</div>
                            <div className="materi-desc">Video . 13 jam lalu</div>
                          </Col>
                          <Col style={{padding:"0px 16px"}}>
                            <img width={44} src={ICTurunan} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="card-materi">
                        <Row style={{width:'100%'}}>
                          <Col flex={1}>
                            <div className="materi-title">Medan Magnet</div>
                            <div className="materi-desc">Video . 13 jam lalu</div>
                          </Col>
                          <Col style={{padding:"0px 16px"}}>
                            <img width={44} src={ICTurunan} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  {/* <div>
                    <div className="content-title-wrapper">
                      <div className="content-title">Tryout Hari Ini</div>
                      <div>Lihat Semua</div>
                    </div>
                    <div className="tryout-wrapper">
                      <div className="card-tryout">
                        <div>
                          <img width={44} src={ICTryout1} />
                        </div>
                        <div>
                          <div className="tryout-title">Tryout UTBK 2021 #1</div>
                          <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                        </div>
                      </div>
                      <div className="card-tryout">
                        <div>
                          <img width={44} src={ICTryout1} />
                        </div>
                        <div>
                          <div className="tryout-title">Tryout UTBK 2021 #1</div>
                          <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                        </div>
                      </div>
                      <div className="card-tryout">
                        <div>
                          <img width={44} src={ICTryout1} />
                        </div>
                        <div>
                          <div className="tryout-title">Tryout UTBK 2021 #1</div>
                          <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                        </div>
                      </div>
                      <div className="card-tryout">
                        <div>
                          <img width={44} src={ICTryout1} />
                        </div>
                        <div>
                          <div className="tryout-title">Tryout UTBK 2021 #1</div>
                          <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                        </div>
                      </div>
                      <div className="card-tryout">
                        <div>
                          <img width={44} src={ICTryout1} />
                        </div>
                        <div>
                          <div className="tryout-title">Tryout UTBK 2021 #1</div>
                          <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <Row gutter={16} style={{marginTop:24}}>
                    <Col span={24}>
                      <div className="content-title-wrapper">
                        <div className="content-title">Tryout Hari Ini</div>
                        <div>Lihat Semua</div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="card-tryout">
                        <Row style={{width:'100%'}}>
                          <Col style={{marginRight:16}}>
                            <img width={44} src={ICTryout1} />
                          </Col>
                          <Col flex={1}>
                            <div className="tryout-title">Tryout UTBK 2021 #1</div>
                            <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="card-tryout">
                        <Row style={{width:'100%'}}>
                          <Col style={{marginRight:16}}>
                            <img width={44} src={ICTryout1} />
                          </Col>
                          <Col flex={1}>
                            <div className="tryout-title">Tryout UTBK 2021 #1</div>
                            <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="card-tryout">
                        <Row style={{width:'100%'}}>
                          <Col style={{marginRight:16}}>
                            <img width={44} src={ICTryout1} />
                          </Col>
                          <Col flex={1}>
                            <div className="tryout-title">Tryout UTBK 2021 #1</div>
                            <div className="tryout-desc">25 - 26 Agustus 2020 </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={7} className="profile-container">
              <div className="header">
                <Row>
                  <Col flex={1}>
                    <MenuOutlined style={iconStyle}/>
                  </Col>
                  <Col>
                    <Row>
                      Log Out
                      <ShoppingCartOutlined style={iconStyle}/>
                    </Row>
                  </Col>
                </Row>
                <Row align="center">
                  <div className="photo-profile">
                    <img src={PhotoProfile} />
                  </div>
                  <Col span={24}> <div className="full-name">Adam Daverel</div> </Col>
                  <Col span={24}>
                    <Row align="center">
                      <div className="wallet">
                        <img src={ICWallet}/> Rp 12.000
                      </div>
                      <div className="diamond">
                        <img src={ICDiamond}/> 300
                      </div>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <div className="premium">
                      <div className="premium-label"> <img src={ICPremium} /> Premium</div>
                      <div className="premium-desc">sampai 24 Nov 2020</div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>Terakhir Dipelajari</div>
                    <div>Lihat semua</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard;
