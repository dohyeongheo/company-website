const { execSync } = require('child_process');
const fs = require('fs');

let isRunning = false;

// 파일 변경 감지 및 자동 커밋 함수
function checkAndCommit() {
  if (isRunning) return;

  try {
    isRunning = true;

    // 변경사항이 있는지 확인
    execSync('git add .', { stdio: 'ignore' });
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });

    if (status.trim()) {
      const timestamp = new Date().toLocaleString('ko-KR');
      const commitMessage = `Auto commit: ${timestamp}`;

      console.log(`\n[${timestamp}] 변경사항 감지, 커밋 실행 중...`);
      console.log('변경된 파일:');
      console.log(status);

      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
      console.log(`✅ 커밋 완료: ${commitMessage}\n`);
    }
  } catch (error) {
    // 에러는 조용히 무시
    if (error.message && !error.message.includes('nothing to commit')) {
      console.error('커밋 중 오류:', error.message);
    }
  } finally {
    isRunning = false;
  }
}

// 주기적으로 확인 (5초마다)
console.log('🚀 자동 커밋 스크립트 시작...');
console.log('파일 변경사항을 5초마다 확인합니다.');
console.log('종료하려면 Ctrl+C를 누르세요.\n');

// 즉시 한 번 실행
checkAndCommit();

// 주기적으로 실행
setInterval(checkAndCommit, 5000);

