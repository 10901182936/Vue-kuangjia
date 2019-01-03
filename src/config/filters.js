var filters={
    money:(value) => {
        return isNaN(value)?'':Math.round(value * 100) / 100
    }

}

export default filters;