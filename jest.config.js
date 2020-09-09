module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // 输出覆盖信息文件的目录
  coverageDirectory: './coverage/',
  testPathIgnorePatterns: ['<rootDir/node_modules/>'],
  // 如果测试率未达100%，则测试失败
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  // 路径映射配置，具体可查看 https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
  // 需要配合 TypeScript 路径映射，具体可查看：https://www.tslang.cn/docs/handbook/module-resolution.html
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
