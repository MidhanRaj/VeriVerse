const check = (name) => {
    try {
        console.log(`Checking ${name}...`);
        require(name);
        console.log(`SUCCESS: ${name}`);
    } catch (e) {
        console.error(`FAIL: ${name} - ${e.message}`);
    }
};

check('express');
check('cors');
check('morgan');
check('dotenv');
check('web3.storage');
check('@thirdweb-dev/sdk');
check('ethers');
