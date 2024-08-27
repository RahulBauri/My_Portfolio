import { FaGithub, FaAws } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { IoMdCall, IoMdDownload } from 'react-icons/io';

export const LinkUtils = [
  { name: 'LinkdIn', icon: <FaLinkedin size={30} /> },
  { name: 'Github', icon: <FaGithub size={30} /> },
  { name: 'AWS', icon: <FaAws size={30} /> },
  { name: 'Resume', icon: <IoDocumentText size={30} color='blue' /> },
  { name: 'Email', icon: <MdEmail size={30} color='blue' /> },
  { name: 'Phone', icon: <IoMdCall size={30} color='blue' /> },
  { name: 'Download', icon: <IoMdDownload size={30} color='blue' /> },
];
