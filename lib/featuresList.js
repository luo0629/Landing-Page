// import { SiGithub } from "react-icons/si";
// import { FaMobileAlt } from "react-icons/fa";
// import { MdDashboardCustomize } from "react-icons/md";
// import { GrOptimize, GrDeploy } from "react-icons/gr";
// import { FaEarthAsia } from "react-icons/fa6";
// import { FaDatabase, FaUpload, FaChartBar, FaMapMarkedAlt, FaHistory, FaShieldAlt } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { IoCloudUpload, IoAnalytics, IoMap, IoTimeOutline, IoShieldCheckmark } from "react-icons/io5";
// import { BiData, BiCloudUpload, BiAnalyse, BiMap, BiHistory, BiShield } from "react-icons/bi";

export const FeaturesList = {
  FRETURES_EN: [
    {
      icon: MdAir,
      title: "Multi-Source Data Support",
      description: "Support for importing and analyzing various types of data including air quality, meteorological.",
    },
    {
      icon: IoCloudUpload,
      title: "Easy Upload",
      description: "Support for CSV and Excel formats with drag-and-drop functionality, no complex operations required.",
    },
    {
      icon: IoAnalytics,
      title: "Data Visualization",
      description: "Automatically generate chart analysis after upload, intuitively displaying air quality trend changes.",
    },
    {
      icon: IoMap,
      title: "Geo Analysis",
      description: "Display station distribution and regional air quality comparisons using geographic data.",
    },
    {
      icon: IoTimeOutline,
      title: "Historical Tracking",
      description: "Complete recording of data change history, supporting time series analysis and trend prediction.",
    },
    {
      icon: IoShieldCheckmark,
      title: "Data Security",
      description: "Strict data validation and secure storage mechanisms to ensure the integrity of environmental data.",
    },
  ],

  FRETURES_ZH: [
    {
      icon: MdAir,
      title: "多源数据支持",
      description: "支持空气质量、气象和排放源等多种类型数据的导入与分析。",
    },
    {
      icon: IoCloudUpload,
      title: "便捷上传",
      description: "支持CSV和Excel格式，拖拽即可上传，无需复杂操作。",
    },
    {
      icon: IoAnalytics,
      title: "数据可视化",
      description: "上传后自动生成图表分析，直观展示空气质量趋势变化。",
    },
    {
      icon: IoMap,
      title: "地理分布分析",
      description: "自动关联地理信息，展示监测站点分布及区域空气质量对比。",
    },
    {
      icon: IoTimeOutline,
      title: "历史追踪",
      description: "完整记录数据变化历史，支持时间序列分析和趋势预测。",
    },
    {
      icon: IoShieldCheckmark,
      title: "数据安全",
      description: "严格的数据验证和安全存储机制，保障敏感环境数据的完整性。",
    },
  ]
};
