import React from 'react';

const SelectedCard = ({ player, removePlayer }) => {
    console.log('player', player)
    const handleRemove = () => {
        removePlayer(player)
    }
    return (
       <div className=' m-2 flex justify-between items-center border-2 border-gray-400 rounded-2xl bg-slate-200 p-4'>
             <div className=' flex items-center gap-4'>
            <img className='w-12 h-12 rounded-full' src={player.player_image} alt="" />
            <div>
                <h1>{player.player_name}</h1>
                <p className='text-xs'>{player.playing_role}</p>
            </div>
            </div>
            <div onClick={handleRemove} className='w-6 h-6 '>
                <img src="https://i.ibb.co.com/GQX68Dbd/bin.png" alt="" srcset="" />
            </div>
           </div>
    );
};

export default SelectedCard;