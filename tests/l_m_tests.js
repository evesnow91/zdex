const common = require('./common.js');

async function test_add_liquidity(zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing AddLiquidity");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_remove_liquidity(zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing RemoveLiquidity");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_liquidity_manager(zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("##### Testing LiquidityManager #####");
  try {
    await test_add_liquidity(zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_remove_liquidity(zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_liquidity_manager = test_liquidity_manager;
