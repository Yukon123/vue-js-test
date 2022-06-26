export function validatePass(rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (this.ruleForm.checkPass !== '') {
      this.$refs.ruleForm.validateField('checkPass')
    }
  }
}

export function validateField(rule, value, callback) {
  if (value === '') {
    callback(new Error('kkk'))
  } else {
    if (this.ruleForm.checkPass !== '') {
      this.$refs.ruleForm.validateField('大胃王\
                        ddddd\
                           大大')
    }
  }
}
