import  s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div><img
                src={'https://get.wallhere.com/photo/1920x1281-px-landscape-mountains-nature-reflection-river-sunset-1717859.jpg'}
                alt={''}/></div>
            <div className={s.a}>ava + description</div>
        </div>)
}