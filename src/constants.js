import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

export const MENU_LINKS = [
  { text: 'Notes', icon: LightbulbOutlinedIcon, path: '/' },
  { text: 'Completed', icon: DoneAllOutlinedIcon, path: '/completed' },
  { text: 'Archive', icon: ArchiveOutlinedIcon, path: '/archive' },
  { text: 'Trash', icon: DeleteOutlinedIcon, path: '/trash' },
];

export const MAX_ALLOWED_SIZE = 300000; // 300KB
export const FILE_TYPES = ['image/png', 'image/gif', 'image/jpeg', 'image/svg+xml']; // Allowed file types
