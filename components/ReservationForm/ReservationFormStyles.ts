const ReservationFormStyle = {
    container: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
    },
    inputContainer: {
        display: "flex",
        maxWidth: "100%",
        "@media (max-width: 1268px)": {
            width: "100%",
        },
        "@media (max-width: 750px)": {
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
        },
    },
    inputBox1: {
        border: "1px solid var(--color-gainsboro-200)",
        borderRight: "none",
        borderRadius: "var(--br-5xs) 0 0 var(--br-5xs)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "var(--padding-mid) 16px var(--padding-mid) 24px",
        maxWidth: "100%",
        "@media (max-width: 1268px)": {
            borderBottom: "none",
            borderRadius: "var(--br-5xs) 0 0 0",
            width: "50%",
        },
        "@media (max-width: 750px)": {
            width: "auto",
            display: "flex",
            borderRight: "1px solid var(--color-gainsboro-200)",
            borderRadius: "var(--br-5xs) var(--br-5xs) 0 0",
        },
    },
    formControl: {
        width: "210px",
        "@media (max-width: 750px)": {
            width: "256px",
        },
    },
    inputBox2: {
        borderLeft: "1px solid var(--color-gainsboro-200)",
        borderTop: "1px solid var(--color-gainsboro-200)",
        borderBottom: "1px solid var(--color-gainsboro-200)",
        padding: "var(--padding-mid) 16px var(--padding-mini) 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        maxWidth: "100%",
        "@media (max-width: 1268px)": {
            borderBottom: "none",
            borderRight: "1px solid var(--color-gainsboro-200)",
            borderRadius: " 0  var(--br-5xs) 0  0 ",
            width: "50%",
        },
        "@media (max-width: 750px)": {
            width: "auto",
            borderRadius: "0px",
        },
    },
    inputLabel: {
        fontSize: "var(--font-size-xl)",
        lineHeight: "17.07px",
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        color: " var(--color-gray)",
        left: "-14px",
        marginTop: "0px",
    },
    select1: {
        marginTop: "12.1px",
        ".MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        ".MuiSelect-icon": {
            top: "calc(50% - 12px)",
        },
        " .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
        {
            fontSize: "var(--font-size-base)",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
        },
        ".MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input":
        {
            paddingRight: "0px",
        },
        ".MuiSelect-select": {
            padding: "0px !important",
            height: "24px",
        },
    },
    select2: {
        marginTop: "12.1px",
        fontSize: "var(--font-size-base)",
        lineHeight: "19.6px",
        fontWeight: 500,
        fontFamily: "var(--font-montserrat)",
        ".MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        ".MuiSelect-icon": {
            top: "calc(50% - 12px)",
        },
        ".MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input":
        {
            paddingRight: "0px",
        },
        " .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
        {
            fontSize: "var(--font-size-base)",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
        },
        ".MuiSelect-select": {
            padding: "0px !important",
            height: "24px",
        },
    },
    inputBox3: {
        borderRadius: " 0 var(--br-80xl) var(--br-80xl) 0",
        border: "1px solid var(--color-gainsboro-200)",
        gap: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "@media (max-width: 1268px)": {
            borderRight: "1px solid var(--color-gainsboro-200)",
            borderRadius: " 0  0 var(--br-5xs) var(--br-5xs) ",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
    },
    inputBox4: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--gap-6xl)",
        "@media (max-width: 750px)": {
            flexDirection: "row",
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingRight: "12px",
            paddingLeft: "12px",
        },
        "@media (max-width: 595px)": {
            flexDirection: "column",
            width: "100%",
            gap: "0px",
        },
    },
    inputBox5: { marginRight: "auto" },
    datePicker: {
        marginTop: "15px",
        padding: "0",
        paddingLeft: "21px",
        paddingTop: "14px",
        width: "210px",
        "@media (max-width: 1268px)": {
            paddingLeft: "24px",
        },
        "@media (max-width: 750px)": {
            paddingLeft: "13px",
        },
        ".MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        ".MuiInputBase-root": {
            padding: "0 !important",
            fontSize: "var(--font-size-base)",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
        },
        ".MuiInputBase-input": {
            padding: "0 !important",
        },
    },
    inputLabel2: {
        paddingTop: "3px",
        paddingLeft: "10px",
        fontSize: "var(--font-size-xl)",
        lineHeight: "17.07px",
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        color: " var(--color-gray)",
        "@media (max-width: 1268px)": {
            paddingLeft: "13px",
        },
        "@media (max-width: 750px)": {
            paddingLeft: "0px",
        },
    },
    box: {
        width: "100%",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 450px)": {
            justifyContent: "space-between",
        },
    },
    button1: {
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        textTransform: "none",
        lineHeight: "19.6px",
        fontSize: "var(--font-size-base)",
        color: "#020202",
        borderRadius: "var(--br-7xs)",
        backgroundColor: "var(--color-whitesmoke-300)",
        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        padding: "var(--padding-smi) var(--padding-xs)",
        boxShadow: "none",
        "@media (max-width: 595px)": {
            width: "100%",
        },
        "&:hover": {
            backgroundColor: "unset !important",
            border: "1px solid #19ac58 !important",
            boxShadow: "none !important",
        },
    },
    button2: {
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        textTransform: "none",
        lineHeight: "19.6px",
        fontSize: "var(--font-size-base)",
        color: "black",
        borderRadius: "var(--br-7xs)",
        backgroundColor: "var(--color-whitesmoke-300)",
        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        padding: "var(--padding-smi) var(--padding-xs)",
        boxShadow: "none",
        "@media (max-width: 595px)": {
            width: "100%",
        },
        "&:hover": {
            backgroundColor: "unset !important",
            border: "1px solid #19ac58 !important",
            boxShadow: "none !important",
        },
    },
    box2: {
        display: "flex",
        gap: "25px",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1268px)": {
            paddingRight: "20px",
        },
        "@media (max-width: 791px)": {
            display: "none",
        },
    },
    box3: {
        width: "100%",
        display: "none",
        "@media (max-width: 791px)": {
            display: "flex",
        },
    },
    
};  
export default ReservationFormStyle;
