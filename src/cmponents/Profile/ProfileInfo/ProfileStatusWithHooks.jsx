import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        if (props.isOwner){
            setEditMode(true);
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <>
                {!editMode &&
                <div>
                    <b>Status:</b> <span onDoubleClick={ activateEditMode }>{status || 'User has no status'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status || 'User has no status'}/>
                </div>
                }
            </>
        )
}

export default ProfileStatusWithHooks;