import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="bg-blue-400 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">顧客管理アプリ</h1>
      </div>
      <button
        onClick={handleLogout}
        className="hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:cursor-pointer"
      >
        ログアウト
      </button>
    </div>
  );
}

export default Header;
