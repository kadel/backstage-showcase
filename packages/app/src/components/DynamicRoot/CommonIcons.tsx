import AddCircle from '@mui/icons-material/AddCircleOutline';
import Bookmarks from '@mui/icons-material/BookmarksOutlined';
import Business from '@mui/icons-material/BusinessOutlined';
import Category from '@mui/icons-material/CategoryOutlined';
import Cloud from '@mui/icons-material/CloudOutlined';
import Extension from '@mui/icons-material/ExtensionOutlined';
import Favorite from '@mui/icons-material/Favorite';
import FolderOpen from '@mui/icons-material/FolderOpenOutlined';
import GppGood from '@mui/icons-material/GppGoodOutlined';
import Home from '@mui/icons-material/HomeOutlined';
import InsertChart from '@mui/icons-material/InsertChartOutlined';
import Layers from '@mui/icons-material/Layers';
import List from '@mui/icons-material/List';
import MonitorHeart from '@mui/icons-material/MonitorHeartOutlined';
import People from '@mui/icons-material/People';
import QueryStats from '@mui/icons-material/QueryStatsOutlined';
import Rule from '@mui/icons-material/RuleOutlined';
import School from '@mui/icons-material/SchoolOutlined';
import Star from '@mui/icons-material/Star';
import Storefront from '@mui/icons-material/StorefrontOutlined';
import Textsms from '@mui/icons-material/TextsmsOutlined';

const CommonIcons: {
  [k: string]: React.ComponentType<{}>;
} = {
  home: Home,
  group: People,
  category: Category,
  extension: Extension,
  school: School,
  add: AddCircle,
  list: List,
  layers: Layers,
  star: Star,
  favorite: Favorite,
  bookmarks: Bookmarks,
  queryStats: QueryStats,
  chart: InsertChart,
  business: Business,
  storefront: Storefront,
  folder: FolderOpen,
  cloud: Cloud,
  monitor: MonitorHeart,
  feedback: Textsms,
  validate: Rule,
  security: GppGood,
};

export default CommonIcons;