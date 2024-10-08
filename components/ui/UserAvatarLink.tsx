import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DefaultAva } from '@/constants/DefaultAva'
import { useNavigation, useRouter } from 'expo-router'

const UserAvatarLink = ({avatarURL,size,link}:any) => {
  const router = useRouter();
  return (
    <TouchableOpacity className="flex" onPress={()=>router.push(link)}>
      <Image
        source={avatarURL? avatarURL : DefaultAva.male}
        className={`rounded-full`}
        style={{height:size, width:size}}
      ></Image>
    </TouchableOpacity>
  )
}

export default UserAvatarLink