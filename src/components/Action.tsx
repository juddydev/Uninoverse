import React, { useState } from 'react'
import { Button } from './ui/button'
import { XIcon, Grip, Check } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'

interface ActionProps {
    setUpperTextureURL: (url: string) => void;
    setOutsoleTextureURL: (url: string) => void;
    }

const Action: React.FC<ActionProps> = ({setUpperTextureURL, setOutsoleTextureURL }) => {
    const upperColors: {color: string, texture: string}[] = [
        { color: '#9E5723', texture: '/images/texture/703_1upper_1BaseColor.png' },
        { color: '#201E1E', texture: '/images/texture/703_1upper_2BaseColor.png' },
        { color: '#4A5878', texture: '/images/texture/703_1upper_3BaseColor.png' },
        { color: '#7F3623', texture: '/images/texture/703_1upper_4BaseColor.png' },
        { color: '#57392B', texture: '/images/texture/703_1upper_5BaseColor.png' },
    ];

    const outsoleColors: {color: string, texture: string}[] = [
        { color: '#9E5723', texture: '/images/texture/bolangdi_Outsole1_BaseColor_DarkBrown.png' },
        { color: '#201E1E', texture: '/images/texture/bolangdi_Outsole1_BaseColor_Black_.png' },
        { color: '#4A5878', texture: '/images/texture/bolangdi_Outsole1_BaseColor_PurpleBlue_.png' },
        { color: '#7F3623', texture: '/images/texture/bolangdi_Outsole1_BaseColor_reddishbrown.png' },
        { color: '#7F3620', texture: '/images/texture/bolangdi_Outsole1_BaseColor_WineRed.png' },
        { color: '#F3F3F3', texture: "/images/texture/uni_703_01_accessory_metalheel_basecolor.png" }
    ];

    const triggers: {value: string, content: string}[] = [
      {value: 'colors', content: 'カラー'},
      {value: 'materials', content: '素材'},
      {value: 'upper', content: 'アッパー'},
      {value: 'outsole', content: 'アッパー'},
      {value: 'outsole1', content: 'アッパー'},
      {value: 'outsole2', content: 'アッパー'}
    ]

    const [ selectedColor, setSelectedColor ] = useState<number | null>(0)
    const [panelVisible, setPanelVisible] = useState<boolean>(true)

    const handleSelectedColor = (index: number) => {
        setSelectedColor(index)
    }
    console.log(selectedColor)
    return (
        <div className='relative w-full'>
            <div className='absolute right-4 top-4 z-10'>
                <Button 
                  variant={"secondary"} 
                  size="icon" 
                  className="rounded-full w-8 h-8 bg-neutral-500 text-white hover:text-black"
                  onClick={() => setPanelVisible(!panelVisible)}
                >
                  {panelVisible ? (<XIcon className="h-4 w-4" />) : (<Grip className="h-4 w-4" />)}
                </Button>
            </div>
            {panelVisible && (
              <div className="absolute right-0 max-lg:w-full">
                <div className='flex flex-col justify-end lg:gap-80 border border-slate-50 rounded-tl-3xl rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-tr-none lg:shadow-[-4px_0_16px_0_rgba(240,240,240,0.6)] shadow-[0_-10px_8px_0_rgba(240,240,240,0.6)]'>
                    <Tabs defaultValue='colors' className='justify-start gap-4 px-6 pt-16 pb-4 lg:flex'>
                        <TabsList className='lg:grid gap-4 overflow-x-auto max-w-full lg:overflow-visible'>
                            {triggers.map((trigger, index) => (
                              <TabsTrigger key={index} value={trigger.value} className='px-8'>
                                {trigger.content}
                              </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value='colors'>
                        <div className='overflow-x-auto lg:overflow-visible scrollbar-hide'>
                          <div className='flex lg:grid grid-cols-4 gap-x-4 gap-y-8 lg:border lg:border-slate-200 lg:p-6'>
                              {upperColors.map((upperColor, index) => (
                                  <button
                                      key={index}
                                      style={{ backgroundColor: upperColor.color }}
                                      className="shrink-0 w-12 h-12 rounded flex items-center justify-center hover:opacity-80"
                                      onClick={() => {handleSelectedColor(index); setUpperTextureURL(upperColor.texture)}}
                                  >
                                      {selectedColor === index && (
                                          <Check className='text-white'/>
                                      )}
                                  </button>
                              ))}
                          </div>
                        </div>
                        </TabsContent>
                        <TabsContent value='materials'>
                            <div className='overflow-x-auto lg:overflow-visible scrollbar-hide'>
                            <div className='flex lg:grid grid-cols-4 gap-x-4 gap-y-8 lg:border lg:border-slate-200 lg:p-6'>
                                {outsoleColors.map((outsoleColor, index) => (
                                    <button
                                        key={index}
                                        style={{ backgroundColor: outsoleColor.color }}
                                        className="shrink-0 w-12 h-12 rounded flex items-center justify-center hover:opacity-80"
                                        onClick={() => {handleSelectedColor(index); setOutsoleTextureURL(outsoleColor.texture)}}
                                    >
                                        {selectedColor === index && (
                                            <Check className='text-white'/>
                                        )}
                                    </button>
                                ))}
                            </div>
                            </div>
                        </TabsContent>
                        <TabsContent value='upper'>upper</TabsContent>
                        <TabsContent value='outsole'>outsole</TabsContent>
                    </Tabs>
                    <div className='lg:flex justify-end gap-4 p-6 items-end whitespace-nowrap'>
                        <div>
                          <span className='pl-2 text-xl font-semibold'>¥100,000</span>
                          <span className='text-sm'>(税込)</span>
                        </div>
                        <Button className='w-full lg:w-[300px] rounded-none p-6 bg-black text-white'>カートに入れる</Button>
                    </div>
                </div>
              </div>
            )}
        </div>
    )
}

export default Action