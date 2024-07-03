import { useEffect, useState } from 'react';
import { GameContentWrapper } from '../Game.styled'
import { Button } from '@mui/material';

const TowersOfHanoi = () => {
  const [topDisk, setTopDisk] = useState({});
  const [towers, setTowers] = useState([
    {
      id: 12,
      disks: [
        {id: 1, width: 50}, 
        {id: 2, width: 100}, 
        {id: 3, width: 150}
      ]
    },
    {
     id:13,
     disks: []
    },
    {
      id:14,
      disks: []
    },
  ]);

  const handleDisk = (disk, tower, e) => {
    e.stopPropagation();
    if (tower.disks[0] && disk.id === tower.disks[0].id ) {
      setTopDisk({disk: disk, towerId: tower.id});
    }
  };

  const handleTower = (tower) => {
    if (topDisk?.disk?.id) {
      if((tower.disks.length === 0 || tower.disks?.[0]?.width > topDisk.disk.width)) {
        setTowers((prevValues) => prevValues.map((towerEl) => {
          if(tower.id === towerEl.id) {
            return {id: towerEl.id, disks: [topDisk.disk, ...towerEl.disks]}
          }
          if (towerEl.id === topDisk.towerId) {
            return {id: towerEl.id, disks: towerEl.disks.filter((disk) => disk.id !== topDisk.disk.id)}
          }
          return towerEl;
        }));
        setTopDisk({});
      }
    }
  };

  useEffect(() => {
    if(towers[2].disks.length === 3) {
      setTimeout(() => {
        alert('You win')
      },250)
    }
  },[towers]);

  return (
    <GameContentWrapper>
      <div className='towers-container'>
        {
          towers.map((tower) => (
            <div key={tower.id} className='towers'>
              <div onClick={() => handleTower(tower)} className='tower'>
                {
                  tower.disks.map((disk) => (
                    <Button 
                      onClick={(e) => handleDisk(disk, tower, e)} 
                      key={disk.id} 
                      className='disk' 
                      style={{width: disk.width + 'px', border: disk.id === topDisk?.disk?.id  && '2px dotted black'}}
                    />
                  ))
                }
                </div>
            </div>
          ))
        }
      </div>
    </GameContentWrapper>
  )
}

export default TowersOfHanoi

