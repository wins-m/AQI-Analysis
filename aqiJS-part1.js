const askpE4r0hj0J = "aef4JB6Pw85EIbzv";
const asiGB5OXY3fh = "brwQK7FhrDdTk4Ti";
const ackyrpEsoisW = "dfVwvnuRGLL5lAJf";
const aci5uhpWPtga = "ftBGsub7SplT5MFz";
const dskCBqgzqKfz = "hddTORWveVhsVcLD";
const dsiauOFZJSgx = "xZTwKdYm1OJxm7yL";
const dcksTWrjk2uz = "oQiw4sMzs9tPuC6t";
const dci2FgD5WzYx = "pXPCs1sUcXHfqzo5";
const aes_local_key = 'emhlbnFpcGFsbWtleQ==';
const aes_local_iv = 'emhlbnFpcGFsbWl2';
var BASE64 = {
    encrypt: function(text) {
        var b = new Base64();
        return b.encode(text)
    },
    decrypt: function(text) {
        var b = new Base64();
        return b.decode(text)
    }
};
var DES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};
var AES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};
var localStorageUtil = {
    save: function(name, value) {
        var text = JSON.stringify(value);
        text = BASE64.encrypt(text);
        text = AES.encrypt(text, aes_local_key, aes_local_iv);
        try {
            localStorage.setItem(name, text)
        } catch (oException) {
            if (oException.name === 'QuotaExceededError') {
                console.log('Local limit exceeded');
                localStorage.clear();
                localStorage.setItem(name, text)
            }
        }
    },
    check: function(name) {
        return localStorage.getItem(name)
    },
    getValue: function(name) {
        var text = localStorage.getItem(name);
        var result = null;
        if (text) {
            text = AES.decrypt(text, aes_local_key, aes_local_iv);
            text = BASE64.decrypt(text);
            result = JSON.parse(text)
        }
        return result
    },
    remove: function(name) {
        localStorage.removeItem(name)
    }
};
function dCaqTF1VHHG(pbgp3pU) {
    pbgp3pU = DES.decrypt(pbgp3pU, dskCBqgzqKfz, dsiauOFZJSgx);
    return pbgp3pU
}
function d0uottmigt(pbgp3pU) {
    pbgp3pU = BASE64.decrypt(pbgp3pU);
    return pbgp3pU
}
function gXI48dAT0zPLEHA5(key, period) {
    if (typeof period === 'undefined') {
        period = 0
    }
    var d = DES.encrypt(key);
    d = BASE64.encrypt(key);
    var data = localStorageUtil.getValue(key);
    if (data) {
        const time = data.time;
        const current = new Date().getTime();
        if (new Date().getHours() >= 0 && new Date().getHours() < 5 && period > 1) {
            period = 1
        }
        if (current - (period * 60 * 60 * 1000) > time) {
            data = null
        }
        if (new Date().getHours() >= 5 && new Date(time).getDate() !== new Date().getDate() && period === 24) {
            data = null
        }
    }
    return data
}
function osyvzlUO6T(obj) {
    var newObject = {};
    Object.keys(obj).sort().map(function(key) {
        newObject[key] = obj[key]
    });
    return newObject
}
function dJ9wuOlfdQQr(data) {
    data = BASE64.decrypt(data);
    data = DES.decrypt(data, dskCBqgzqKfz, dsiauOFZJSgx);
    data = AES.decrypt(data, askpE4r0hj0J, asiGB5OXY3fh);
    data = BASE64.decrypt(data);
    return data
}
var pZa09rqtw = (function() {
    function osyvzlUO6T(obj) {
        var newObject = {};
        Object.keys(obj).sort().map(function(key) {
            newObject[key] = obj[key]
        });
        return newObject
    }
    return function(mOdKfs9CX, oTUJ36) {
        var aalZ = '660e92fa5446354773d4fc84b6f97db3';
        var csWoQ = 'WEB';
        var tYEkDqB = new Date().getTime();
        var pbgp3pU = {
            appId: aalZ,
            method: mOdKfs9CX,
            timestamp: tYEkDqB,
            clienttype: csWoQ,
            object: oTUJ36,
            secret: hex_md5(aalZ + mOdKfs9CX + tYEkDqB + csWoQ + JSON.stringify(osyvzlUO6T(oTUJ36)))
        };
        pbgp3pU = BASE64.encrypt(JSON.stringify(pbgp3pU));
        return pbgp3pU
    }
}
)();
function sDZcx362PJCxg9uuZJ(mOdKfs9CX, o2XK9QcSYi, cwibwZUX7, p7SCIwz) {
    const kRMp = hex_md5(mOdKfs9CX + JSON.stringify(o2XK9QcSYi));
    const ds0xD = gXI48dAT0zPLEHA5(kRMp, p7SCIwz);
    if (!ds0xD) {
        var pbgp3pU = pZa09rqtw(mOdKfs9CX, o2XK9QcSYi);
        $.ajax({
            url: 'api/historyapi.php',
            data: {
                hFSoYzMbG: pbgp3pU
            },
            type: "post",
            success: function(ds0xD) {
                ds0xD = dJ9wuOlfdQQr(ds0xD);
                oTUJ36 = JSON.parse(ds0xD);
                if (oTUJ36.success) {
                    if (p7SCIwz > 0) {
                        oTUJ36.result.time = new Date().getTime();
                        localStorageUtil.save(kRMp, oTUJ36.result)
                    }
                    cwibwZUX7(oTUJ36.result)
                } else {
                    console.log(oTUJ36.errcode, oTUJ36.errmsg)
                }
            }
        })
    } else {
        cwibwZUX7(ds0xD)
    }
}
